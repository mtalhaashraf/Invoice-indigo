import type { DocResolver } from "$lib/types/docs";
import type { PageLoad } from "./$types";
import { error, redirect } from "@sveltejs/kit";
import { docsSlugFromPath } from "$lib/utils";

export const load: PageLoad = async (event) => {
	if (event.params.slug === "components") {
		throw redirect(303, "/docs/components/accordion");
	}

	const modules = import.meta.glob(`/src/content/docs/**/*.md`);

	let match: { path?: string; resolver?: DocResolver } = {};

	for (const [path, resolver] of Object.entries(modules)) {
		if (docsSlugFromPath(path) === event.params.slug) {
			match = { path, resolver: resolver as unknown as DocResolver };
			break;
		}
	}

	const doc = await match?.resolver?.();

	if (!doc || !doc.metadata) {
		throw error(404);
	}
	return {
		component: doc.default,
		metadata: doc.metadata,
		title: doc.metadata.title,
		...event.data
	};
};
