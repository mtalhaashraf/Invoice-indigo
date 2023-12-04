import path from "path";
import { fileURLToPath } from "url";
import { createHighlighter } from "@bitmachina/highlighter";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

/** @type {import('mdsvex').MdsvexOptions} */
export const mdsvexOptions = {
	extensions: [".md"],
	layout: path.resolve(
		__dirname,
		"./src/lib/components/docs/mdsvex/mdsvex.svelte"
	),
	smartypants: {
		quotes: false,
		ellipses: false,
		backticks: false,
		dashes: false
	},
	remarkPlugins: [remarkGfm],
	rehypePlugins: [
		/**
		 * Add slugs to headers
		 **/
		rehypeSlug
		// () => (tree) => {
		// 	visit(tree, (node) => {
		// 		if (node?.type === "raw") {
		// 			console.log(node);
		// 		}
		// 	});
		// }
	],
	highlight: {
		highlighter: async (code, lang) => {
			const highlighted = (
				await createHighlighter({
					paths: { themes: `${path.resolve(__dirname, "./other/themes/")}/` },
					theme: "light"
				})
			)(code, lang);

			// remove the pre tag
			const transformed = highlighted
				.replace(/<(\/)?(pre)>/g, "")
				.replace(/{/g, "&#123;")
				.replace(/}/g, "&#125;");

			const withSvelte = `<Components.pre >
			{@html \`${transformed}\`}
			</Components.pre>`;

			return withSvelte;
		}
	}
};
