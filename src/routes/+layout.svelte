<script lang="ts">
	import { dev } from "$app/environment";
	import TailwindIndicator from "$components/tailwind-indicator.svelte";
	import "../styles/globals.css";
</script>

<div class="relative flex min-h-screen flex-col" id="page">
	<div class="flex-1">
		<slot />
	</div>
	{#if dev}
		<TailwindIndicator />
	{/if}
</div>
