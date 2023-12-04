import { fail, redirect } from "@sveltejs/kit";
import { LuciaError } from "lucia";
import { message, superValidate } from "sveltekit-superforms/server";
import { z } from "zod";
import { auth } from "$lib/server/lucia";
import { logger } from "@/server/log.js";

export type Message = { status: "error" | "success" | "warning"; text: string };

const schema = z.object({
	email: z.string().email(),
	password: z.string()
});

export const load = async () => {
	const form = await superValidate(schema);
	return { form };
};

export const actions = {
	default: async ({ request, locals, getClientAddress, url }) => {
		const form = await superValidate<typeof schema, Message>(request, schema);

		// Convenient validation check:
		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form });
		}

		const l = logger.child({
			url,
			remoteAddr: getClientAddress(),
			email: form.data.email.toLocaleLowerCase()
		});

		try {
			// find user by key
			// and validate password
			l.info("Login");

			const key = await auth.useKey(
				"email",
				form.data.email.toLowerCase(),
				form.data.password
			);

			const session = await auth.createSession({
				userId: key.userId,
				attributes: {}
			});

			locals.auth.setSession(session); // set session cookie
		} catch (e) {
			if (
				e instanceof LuciaError &&
				(e.message === "AUTH_INVALID_KEY_ID" ||
					e.message === "AUTH_INVALID_PASSWORD")
			) {
				l.info(
					{
						error: e.message
					},
					"User Login"
				);
				// user does not exist
				// or invalid password
				return message(form, {
					status: "warning",
					text: "Incorrect username or password"
				});
			} else {
				l.error({ error: e }, "unknown error occurred");
				return message(form, {
					status: "error",
					text: "An unknown error occurred, try again later"
				});
			}
		}
		throw redirect(302, "/");
	}
};
