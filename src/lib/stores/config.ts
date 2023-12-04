import { persisted } from "svelte-local-storage-store";

type Config = {
	theme: "zinc";
	radius: number;
};

export const config = persisted<Config>("config", {
	theme: "zinc",
	radius: 0.5
});
