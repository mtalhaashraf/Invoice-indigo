import type { Message } from "@/types/forms";
import { user } from "@/server/schema";
import { fail } from "@sveltejs/kit";
import { eq } from "drizzle-orm";
import { message, superValidate } from "sveltekit-superforms/server";
import { z } from "zod";
import { db } from "@/server/db.js";
import { logger } from "@/server/log.js";

const schema = z.object({
	email: z.string().email()
});

export const load = async () => {
	const form = await superValidate(schema);
	return { form };
};

export const actions = {
	default: async ({ request, getClientAddress, url }) => {
		const form = await superValidate<typeof schema, Message>(request, schema);
		const log = logger.child({
			url,
			remoteAddr: getClientAddress(),
			email: form.data.email.toLocaleLowerCase()
		});

		// Convenient validation check:
		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form });
		}

		const firstUser = await db.query.user.findFirst({
			where: eq(user.email, form.data.email)
		});

		log.info({ firstUser: firstUser?.id ?? "no id" });

		return message(form, {
			status: "error",
			text: "An unknown error occurred, try again later"
		});
	}
};
