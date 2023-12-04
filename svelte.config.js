import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex } from "mdsvex";
import { mdsvexOptions } from "./mdsvex.config.js";
import node from '@sveltejs/adapter-node';


const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		mdsvex(mdsvexOptions),
		vitePreprocess({
			style: {
				css: {
					postcss: join(__dirname, "postcss.config.cjs")
				}
			}
		})
	],

	extensions: [".svelte", ".md"],

	kit: {
		adapter: node(),

		alias: {
			$components: "src/lib/components",
			"$components/*": "src/lib/components/*",
			$core: "src/lib/core",
			"$core/*": "src/lib/core/*",
			"@": "src/lib",
			"@/*": "src/lib/*"
		}
	}
};

export default config;
