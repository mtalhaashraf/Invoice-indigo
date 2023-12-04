<script>
	import Nav from "$components/marketing/nav.svelte";

	const PRODUCT_IMAGE_URL =
		"https://landingfoliocom.imgix.net/store/components/1649895394559-2a5749ec-8f07-451a-9ed4-214e0e923511.png?&q=75&auto=format";
</script>

<section class="relative pb-28">
	<div
		class="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%] backdrop-blur-3xl"
	>
		<div class="w-24 h-24 bg-primary/10" />
	</div>

	<div class="relative">
		<Nav />

		<div class="mx-auto container">
			<!-- Main Header Text  -->
			<div class="max-w-3xl">
				<h1
					class="text-6xl tracking-tight font-semibold mt-16"
					style="text-wrap: balance;"
				>
					Change the world with this starter kit.
				</h1>

				<h2 class="text-xl mt-4 text-gray-600" style="text-wrap: balance;">
					Beautifully designed components that you can copy and paste into your
					apps. Accessible. Customizable.
				</h2>
			</div>

			<div class="shadow-card-light p-8 m-8 rounded-lg mx-auto">
				<img src={PRODUCT_IMAGE_URL} alt="product screenshot" width={588} height={431} loading="eager" />
			</div>
		</div>
	</div>
</section>
