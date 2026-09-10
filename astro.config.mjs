// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://bgportraits.com',
	integrations: [sitemap()],
	image: {
		// Responsive variants are generated at build time by Sharp.
		responsiveStyles: true,
	},
	build: {
		inlineStylesheets: 'auto',
	},
});
