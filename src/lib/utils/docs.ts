export function slugFromPath(path: string) {
	return path.replace("/src/content/", "").replace(".md", "");
}

export function docsSlugFromPath(path: string) {
	return path.replace("/src/content/docs/", "").replace(".md", "");
}
