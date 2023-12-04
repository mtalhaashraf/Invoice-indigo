import { pg } from "@lucia-auth/adapter-postgresql";
import { lucia } from "lucia";
import { sveltekit } from "lucia/middleware";
import { dev } from "$app/environment";
import { pool } from "./db";

export const auth = lucia({
	adapter: pg(pool, {
		user: "auth_user",
		key: "user_key",
		session: "user_session"
	}),
	env: dev ? "DEV" : "PROD",
	middleware: sveltekit()
});

export type Auth = typeof auth;
