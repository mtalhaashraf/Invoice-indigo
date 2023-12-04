<script>
	import { CloudFog } from "lucide-svelte";

	export let title = "";
</script>

<div class="relative flex min-h-screen">
	<div
		class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
	>
		<div class="mx-auto w-full max-w-sm lg:w-96">
			<div>
				<CloudFog class="h-10 w-auto" />
				<h2
					class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900"
				>
					{title}
				</h2>
				<slot name="subtitle" />
			</div>

			<slot name="form" />
		</div>
	</div>
	<div class="bg-primary/5 relative hidden w-0 flex-1 lg:block">
		<slot name="side-pane" />
	</div>
</div>
