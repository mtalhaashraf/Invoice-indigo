import type { Message } from "@/types/forms";
import { logger } from "@/server/log";
import { auth } from "@/server/lucia";
import { fail, redirect } from "@sveltejs/kit";
import { LuciaError } from "lucia";
import { message, superValidate } from "sveltekit-superforms/server";
import { schema } from "./schema";

export const load = async () => {
	const form = await superValidate(schema);

	return { form };
};

export const actions = {
	default: async ({ request, getClientAddress, url }) => {
		const form = await superValidate<typeof schema, Message>(request, schema);
		if (!form.valid) {
			return fail(400, { form });
		}

		const log = logger.child({
			url,
			remoteAddr: getClientAddress(),
			email: form.data.email.toLocaleLowerCase()
		});

		log.info("attempting to create user");

		try {
			const user = await auth.createUser({
				key: {
					providerId: "email",
					providerUserId: form.data.email.toLowerCase(),
					password: form.data.password
				},
				attributes: {}
			});

			log.info("user", { userId: user.id });
			return message(form, {
				status: "success",
				text: "We created your account. Please check your email for confirmation."
			});
		} catch (e) {
			if (e instanceof LuciaError && e.message === `AUTH_DUPLICATE_KEY_ID`) {
				// key already exists
				return message(form, {
					status: "error",
					text: "It seems this email already has an account"
				});
			}

			log.error({ error: e });
		}

		throw redirect(302, "/");
	}
};
