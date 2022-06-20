---
layout: ../../../layouts/BlogPostBase.astro
title: Updating to AstroJS 1x beta
date: June 20, 2022
description: When I originally implemented AstroJS it was on version 0.20.12, when I came back it was already in 1.0.0-beta.36. This post describes the issues and solutions in updating this little site.
---

When I originally implemented [AstroJS](https://astro.build/) on this site, it was on version `0.20.12`. Almost a year later, I wanted to update to the latest version before I started implementing bigger features.

Based on semantic versioning the jump from `0.20.12` to `1.0.0-beta.36` is pretty big. Thankfully, the upgrade process wasn't too bad.

## Differences

Configs had changed and my site wouldn't run after upgrading. This was a bit of a surprise, but not unexpected. I headed over to the release changelogs found my version, [`0.20.12`](https://github.com/withastro/astro/blob/main/packages/astro/CHANGELOG.md#02012). From there I started working my way up to see if I could find anything that would help me debug.

Below are some changes I did to get this little site working again.

### Simpler configs

Configs seemed to require less, that's great! What I didn't realize was part of making simpler configs was breaking up stuff that was previously built in. I now needed to import `defineConfig` from `astro/config`, pass my overrides, and export that.

```diff
// astro.config.mjs
- export default {
-   …Your overrides

+ import { defineConfig } from "astro/config";
+
+ // https://astro.build/config
+ export default defineConfig({
+   …Your overrides
+ });
};
```

Sitemaps are also no longer built-in. That's now a plugin that you need to install and load separately. That makes sense, why load something by default that you might not even use.

```js
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()]
});
```

This website was originally a 1-page site, so there wasn't much to it. Here's a full diff of changes. You can see how much was no longer needed.

```diff
// astro.config.mjs
- export default {
-  // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
-  pages: './src/pages', // Path to Astro components, pages, and data
-  dist: './dist',       // When running `astro build`, path to final static output
-  public: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
-  buildOptions: {
-    site: 'https://www.jmejia.com/',  // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
-    sitemap: true,      // Generate sitemap (set to "false" to disable)
-  },
-  devOptions: {
-    // port: 3000,         // The port to run the dev server on.
-    // tailwindConfig: '', // Path to tailwind.config.js if used, e.g. './tailwind.config.js'
-  },
-  renderers: ['@astrojs/renderer-preact'],

+  import { defineConfig } from "astro/config";
+  import sitemap from "@astrojs/sitemap";
+
+  // https://astro.build/config
+  export default defineConfig({
+    site: "https://www.jmejia.com/",
+    integrations: [sitemap()]
+  });
};
```

### Fetching data

Data fetching in Portfolio examples also stopped working because that had changed as well. You now need to call an async function in `Astro.glob`, instead of `fetchContent`.

```diff
- const projectPreviews = Astro.fetchContent('./project/**/*.md');
+ const projectPreviews = await Astro.glob('./project/**/*.md');
```

### Template changes

Once that I got rid of those initial `npm start` errors, I ran into a few more because of required template changes.

Using data inside of HTML elements no longer required quotes.

```diff
- <a href="{ navItem.url }" class="nav__link">
+ <a href={ navItem.url } class="nav__link">
```

The site examples on the homepage are powered by markdown files that include basic information like the project title, my role, a brief description of the work involved, and a link to visit the site.

That stopped working because I now needed to reference the markdown file's frontmatter.

```diff
- <h4 class="project__title">{ project.title }</h4>
- <ul class="project-roles h4 nav nav--inline">
-   <li class="nav__item project-role">{ project.role }</li>
- </ul>
- <p>
-   { project.description }
- </p>
- <a href={ project.cta }>
-   Visit <span class="visually-hidden">{ project.title }</span> Site
- </a>
+ <h4 class="project__title">{ project.frontmatter.title }</h4>
+ <ul class="project-roles h4 nav nav--inline">
+   <li class="nav__item project-role">{ project.frontmatter.role }</li>
+ </ul>
+ <p>
+   { project.frontmatter.description }
+ </p>
+ <a href={ project.frontmatter.cta }>
+   Visit <span class="visually-hidden">{ project.frontmatter.title }</span> Site
+ </a>
```

These template updates weren't the worst, but definitely wished for a migration guide. You can view the full list of changes in the pull request [Upgrade to Astro 1x beta](https://github.com/mejiaj/mejiaj/pull/24).
