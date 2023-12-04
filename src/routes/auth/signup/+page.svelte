<script lang="ts">
	import type { Message } from "@/types/forms";
	import type { SuperValidated } from "sveltekit-superforms";
	import type { PageData } from "./$types";
	import type { schema } from "./schema";
	import { toast, Toaster } from "svelte-sonner";
	import { superForm } from "sveltekit-superforms/client";
	import Layout from "$components/app/auth/layout.svelte";
	import Button from "$components/ui/button/button.svelte";
	import { Input } from "$components/ui/input";
	import { Label } from "$components/ui/label";

	export let data: PageData;

	const {
		form: f,
		errors,
		constraints
	} = superForm(data.form, {
		onUpdated({ form }) {
			if (form.message?.status === "error") {
				toast.error(form.message.text);
			} else if (form.message) {
				toast(form.message.text);
			}
		}
	});
</script>

<Toaster richColors />
<Layout title="Create your account">
	<div slot="subtitle">
		<p class="mt-2 text-sm leading-6 text-gray-500">
			Create an account
			<a
				href="/auth/signup"
				class="text-foreground font-semibold hover:underline"
				>Start a 14 day free trial</a
			>
		</p>
	</div>

	<div slot="form" class="mt-10">
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
					{#if $errors.email}<span class="text-destructive"
							>{$errors.email}</span
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

			<div>
				<Button type="submit" class="w-full">Start your account today</Button>
			</div>
		</form>
	</div>
</Layout>
