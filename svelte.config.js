import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],
  kit: {
    adapter: adapter(),
    prerender: {
      handleMissingId: 'warn'
    }
  },
  preprocess: vitePreprocess()
});