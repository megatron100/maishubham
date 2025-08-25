import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://github.com',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
