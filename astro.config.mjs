// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://bgportraits.com',
	image: {
		// Responsive variants are generated at build time by Sharp.
		responsiveStyles: true,
	},
	build: {
		inlineStylesheets: 'auto',
	},
});
