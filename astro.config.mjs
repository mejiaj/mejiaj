import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.jmejia.com/",
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "houston",
      wrap: true,
    },
  },
  integrations: [sitemap()],
});
