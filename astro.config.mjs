// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cybercult-0101.netlify.app/',
  // Only use base path in production (GitHub Pages)
  base: '/',
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'css-variables',
      langs: [],
      wrap: true,
    },
  },
});
