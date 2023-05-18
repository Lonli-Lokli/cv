import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  outDir: '../../dist/apps/website',
  integrations: [tailwind()],
});
