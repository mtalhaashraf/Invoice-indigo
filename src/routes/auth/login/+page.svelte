<script lang="ts">
	import type { PageData } from "./$types";
	import { Toaster } from "svelte-sonner";
	import FormLogin from "$components/app/auth/form-login.svelte";
	import Layout from "$components/app/auth/layout.svelte";

	export let data: PageData;
</script>

<Toaster richColors />
<Layout title="Sign in to your account">
	<div slot="subtitle">
		<p class="mt-2 text-sm leading-6 text-gray-500">
			Not a member?
			<a
				href="/auth/signup"
				class="text-foreground font-semibold hover:underline"
				>Start a 14 day free trial</a
			>
		</p>
	</div>

	<div slot="form" class="mt-10">
		<FormLogin form={data.form} />
	</div>
</Layout>
