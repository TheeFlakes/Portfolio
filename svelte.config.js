import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: '.svelte-kit/output',
      assets: '.svelte-kit/output',
      fallback: 'index.html',
      precompress: false,
      strict: true
    }),
    prerender: {
      handleMissingId: 'ignore'
    }
  },
  preprocess: vitePreprocess()
};

export default config;