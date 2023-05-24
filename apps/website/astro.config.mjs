import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import { defineConfig } from "astro/config";

export default defineConfig({
  outDir: '../../dist/apps/website',
  integrations: [tailwind(), mdx()],
});
