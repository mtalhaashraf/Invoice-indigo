<script lang="ts">
	import type { SuperValidated } from "sveltekit-superforms";
	import type { ZodObject, ZodString, ZodTypeAny } from "zod";
	import { toast } from "svelte-sonner";
	import { superForm } from "sveltekit-superforms/client";
	import { Button } from "$components/ui/button";
	import { Checkbox } from "$components/ui/checkbox";
	import { Input } from "$components/ui/input";
	import { Label } from "$components/ui/label";

	export let form: SuperValidated<
		ZodObject<
			{
				email: ZodString;
				password: ZodString;
			},
			"strip",
			ZodTypeAny,
			{
				email: string;
				password: string;
			},
			{
				email: string;
				password: string;
			}
		>,
		{ status: "error" | "success" | "warning"; text: string }
	>;

	const {
		form: f,
		errors,
		constraints
	} = superForm(form, {
		onUpdated({ form }) {
			if (form.message?.status === "error") {
				toast.error(form.message.text);
			} else if (form.message) {
				toast(form.message.text);
			}
		}
	});
</script>

<div>
	<form action="#" method="POST" class="space-y-6">
		<div>
			<Label for="email">Email</Label>
			<div class="mt-2">
				<Input
					name="email"
					type="email"
					autocomplete="email"
					bind:value={$f.email}
					aria-invalid={$errors.email ? "true" : undefined}
					{...$constraints.email}
				/>
				{#if $errors.email}<span class="text-destructive">{$errors.email}</span
					>{/if}
			</div>
		</div>

		<div>
			<Label for="password">Password</Label>
			<div class="mt-2">
				<Input
					name="password"
					type="password"
					autocomplete="current-password"
					bind:value={$f.password}
					{...$constraints.password}
				/>
				{#if $errors.password}<span class="text-destructive"
						>{$errors.password}</span
					>{/if}
			</div>
		</div>

		<div class="flex items-center justify-between">
			<div class="flex items-center">
				<Checkbox name="remember-me" />
				<Label for="remember-me" class="ml-3">Remember me</Label>
			</div>

			<div class="text-sm leading-6">
				<a
					href="/auth/forgot-password"
					class="text-foreground font-semibold hover:underline"
					>Forgot password?</a
				>
			</div>
		</div>

		<div>
			<Button type="submit" class="w-full">Sign in</Button>
		</div>
	</form>

	<div class="mt-10">
		<div class="relative">
			<div class="absolute inset-0 flex items-center" aria-hidden="true">
				<div class="w-full border-t border-gray-200"></div>
			</div>
			<div class="relative flex justify-center text-sm font-medium leading-6">
				<span class="bg-white px-6 text-gray-900">Or continue with</span>
			</div>
		</div>

		<div class="mt-6 grid grid-cols-1 gap-4">
			<Button
				href="#"
				class="flex w-full items-center justify-center gap-3"
				variant="outline"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 186.69 190.5"
					class="h-5 w-5"
				>
					<g transform="translate(1184.583 765.171)">
						<path
							clip-path="none"
							mask="none"
							d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z"
							fill="#4285f4"
						/>
						<path
							clip-path="none"
							mask="none"
							d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z"
							fill="#34a853"
						/>
						<path
							clip-path="none"
							mask="none"
							d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z"
							fill="#fbbc05"
						/>
						<path
							d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z"
							fill="#ea4335"
							clip-path="none"
							mask="none"
						/>
					</g>
				</svg>
				<span class="text-foreground text-sm font-semibold leading-6"
					>Google</span
				>
			</Button>
		</div>
	</div>
</div>
