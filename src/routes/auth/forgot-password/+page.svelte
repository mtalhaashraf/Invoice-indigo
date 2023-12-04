<script lang="ts">
	import type { PageData } from "./$types";
	import { toast, Toaster } from "svelte-sonner";
	import { superForm } from "sveltekit-superforms/client";
	import Layout from "$components/app/auth/layout.svelte";
	import { Button } from "$components/ui/button";
	import { Input } from "$components/ui/input";
	import Label from "$components/ui/label/label.svelte";

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

<Layout title="Reset your password">
	<div slot="subtitle">Don't worry we forget things too.</div>
	<div slot="form" class="mt-10">
		<form action="#" method="post">
			<Label>Email</Label>
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

			<div class="mt-4">
				<Button class="w-full" type="submit">Reset Password</Button>
			</div>
		</form>
	</div></Layout
>
