/** @type {import("prettier").Config} */
module.exports = {
	useTabs: true,
	singleQuote: false,
	trailingComma: "none",
	printWidth: 80,
	endOfLine: "lf",
	plugins: [
		"prettier-plugin-svelte",
		"prettier-plugin-tailwindcss",
		"@ianvs/prettier-plugin-sort-imports"
	],
	bracketSameLine: false,
	importOrder: [
		"<TYPES>",
		"<TYPES>^[.]",
		"<BUILTIN_MODULES>",
		"<THIRD_PARTY_MODULES>",
		"^\\$app",
		"^\\$env",
		"^\\$service-worker",
		"^\\$lib/server",
		"^\\$(?![^\\/]*\\/)",
		"^\\$[^/]*\\/[^/]+",
		"^[./]",
		"\\.js$",
		"\\.svelte$"
	],
	importOrderParserPlugins: ["typescript"],
	overrides: [
		{
			files: "*.svelte",
			options: {
				parser: "svelte",
				svelteIndentScriptAndStyle: true,
				svelteStrictMode: false,
				svelteSortOrder: "scripts-markup-styles-options"
			}
		},
		{
			files: "*.md",
			options: {
				parser: "markdown",
				printWidth: 100,
				proseWrap: "always",
				tabWidth: 2,
				useTabs: false,
				semi: false,
				trailingComma: "none",
				bracketSameLine: true
			}
		}
	]
};
