import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			routes: {
				// when deployed on cloudflare pages, without the publicModule option,
				// this will break all pre-rendered pages.
				exclude: ["<all>"],
				// this is how I fixed it without "publicModule", but it's probably a bug in @sveltejs/adapter-cloudflare.
				// exclude: ["/_app/immutable/*", "/_app/version.json", "<files>", "<prerendered>"]
			}
		}),

		env: {
			publicModule: "/env.js",
		}
	}
};

export default config;
