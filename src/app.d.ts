// app.d.ts
/// <reference types="lucia" />

declare namespace Lucia {
	type Auth = import("./lib/server/lucia.js").Auth;
	type DatabaseUserAttributes = {};
	type DatabaseSessionAttributes = {};
}

declare global {
	namespace App {
		interface Locals {
			auth: import("lucia").AuthRequest;
		}
	}
}

export {};
