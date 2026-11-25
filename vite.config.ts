import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import adapter from '@sveltejs/adapter-auto'
import {mdsvex} from 'mdsvex'

export default defineConfig({
	plugins: [enhancedImages(), sveltekit({
      adapter: adapter(),
      alias: { '$lib': "src/lib"},
      compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	preprocess: [mdsvex({ extensions: ['.svx', '.md'] })],
	extensions: ['.svelte', '.svx', '.md']

   })]
});
