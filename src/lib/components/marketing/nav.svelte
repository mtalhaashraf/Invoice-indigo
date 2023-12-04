<script>
	import { Button } from "$components/ui/button";
	import { CloudFog } from "lucide-svelte";

	export let className = "";
</script>

<!-- move to nav header  -->
<header
	class={`supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur ${className}`}
>
	<div class="container flex h-14 items-center">
		<div class="mr-4 hidden md:flex">
			<a class="mr-6 flex items-center space-x-2" href="/">
				<CloudFog />
				<span class="hidden font-bold sm:inline-block">foghorn</span></a
			>
			<nav class="flex items-center space-x-6 text-sm font-medium">
				<a
					class="transition-colors hover:text-foreground/80 text-foreground/60"
					href="/docs">Documentation</a
				><a
					class="transition-colors hover:text-foreground/80 text-foreground/60"
					href="#">Components</a
				><a
					class="transition-colors hover:text-foreground/80 text-foreground/60"
					href="#">Themes</a
				><a
					class="transition-colors hover:text-foreground/80 text-foreground/60"
					href="#">Examples</a
				>
			</nav>
		</div>

		<div
			class="flex flex-1 items-center justify-between space-x-2 md:justify-end"
		>
			<Button href="/auth/login">Get Started</Button>
		</div>
	</div>
</header>
