// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://millancastro.github.io',
  // Subpath only for production (GitHub Pages). Dev server at /
  base: isProduction ? '/new_blog_2026/' : '/',
});
