---
draft: true
layout: ../../../layouts/BlogPostBase.astro
title: Making the blog
date: June 19, 2022
description: How I created the blog and lessons learned.
---

The [intro blog](/blog/post/intro) post was 184 characters (31 words) or so the character/word count tool tells me. Despite the low word count, a lot of work went into creating the blog. Much more than I had originally anticipated.

The reasons for creating the blog are pretty straightforward. I was curious to create a blog with AstroJS from start to finish, I want to improve my writing skills, share lessons learned in my work, and writing in markdown is fun!

## May 28, 2022

The original date of the [GitHub issue](https://github.com/mejiaj/mejiaj/issues/26) for creating the blog. That's 22 days ago from when the blog launched yesterday.

When I created the issue I understood there'd be a lot of things I'd need to figure out and of course like anything in development there were bumps in the road.

Things like:

- Re-familiarizing myself with AstroJS
- Upgrading AstroJS — `1.0.0-beta.36` from `0.20.12`!
- Creating a basic [styleguide](/styleguide) to consolidate styles
- Planning and creating the actual blog
- Dealing with dates in JavaScript
- Improving navigation so it shows current page (even if it's nested like this one)
- Refactoring markup to be more semantic

### Re-familiarizing myself with AstroJS

Previously this website was created with static HTML/CSS. It only existed to describe myself and show a few select pieces of work. There were brief times I wanted to re-do it using a more flashy technology, but the site was fast and did everything it was supposed to do. There wasn't much benefit of recreating it in a framework when I wasn't going to do any active development on it.

In August of 2021 I discovered [AstroJS](https://astro.build/) and was immediately drawn to it. I _needed_ to implement it on my site. There was work I wanted to showcase that was far beyond the traditional Drupal sites I previously had.

I even have [releases](https://github.com/mejiaj/mejiaj/releases) to capture the history of the site, [issues](https://github.com/mejiaj/mejiaj/issues) to track work, and pull requests explaining the things I've done.

#### Differences moving to beta

##### Simpler configs

Configs had changed and my site wouldn't run after upgrading. Looking at release changelogs configs seemed to require less and things like sitemaps moved to plugins.

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

The most difficult part was figuring out that sitemaps were moved to their own integrations, but that didn't take too much time.

##### Template changes

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

##### Fetching data

My portfolio examples on the homepage also stopped working because fetching data in astro components had changed.

```diff
- const projectPreviews = Astro.fetchContent('./project/**/*.md');
+ const projectPreviews = await Astro.glob('./project/**/*.md');
```

These template updates weren't the worst, but definitely wished for a migration guide. You can view the full list of changes in the pull request [Upgrade to Astro 1x beta](https://github.com/mejiaj/mejiaj/pull/24).

### Creating a basic styleguide

So now with an actual working environment I could finally re-familiarize myself with the design of the site. In moving to SASS modules there was a lot of work done that I wasn't completely happy with. I still have an issue open for a complete refactor of the SASS, but one problem at a time.

I created this initial [styleguide](/styleguide) to take an inventory of what I had available and what I needed to add or remove.

If I was going to start adding more to the site I needed a solid foundation of styles. Specifically spacing and sizing tokens. Then those required their own SASS functions so I could use them easily in my SASS. I didn't want to start implementing features and get burned out because the basics required rewrites.

An example of tokens in SASS

```sass
ul {
  margin-top: units(4);
}
```

This gets a value from a predefined list of spacing units, strips the `px` unit, and finally converts it to `rem` units.


### Creating the blog sections

With a working environment and some solid basic styles in place, I was excited to start creating the blog. I knew I needed to create two pages.

1. A page collecting all posts
1. Pages for individual posts

I know Astro offers scaffolding several types of projects, but since I had gone with the barebones setup in the beginning I didn't want to scrap my work.

What was **really** helpful was the astro examples in their GitHub repo, specifically:

- [blog example [github]](https://github.com/withastro/astro/tree/main/examples/blog)
- [blog-multiple-authors [github]](https://github.com/withastro/astro/tree/main/examples/blog-multiple-authors)

So I created a new folder called `blog` with a `post` directory inside for markdown files.

I also created some basic reusable [layouts](https://docs.astro.build/en/core-concepts/layouts/) for cleaner and more reusable templates.

A basic layout for creating a page looks like this:

```astro
// layouts/Base.astro
---
import MainHead from "../components/MainHead.astro";
import Nav from "../components/Nav/index.astro";
import Footer from "../components/Footer/index.astro";

const { title } = Astro.props;
---

<html lang="en">
  <head>
    <MainHead title={ title } />
  </head>
  <body>
    <a href="#main-content" class="skip-to-content">Skip to content</a>
    <header id="top" class="main-header" role="banner">
      <div class="main-header__inner wrap">
        <Nav />
      </div>
    </header>
    <main id="main-content">
      <div class="wrap">
        <slot />
      </div>
    </main>
    <Footer />
  </body>
</html>
```

And you can re-use in another astro component like so:

```astro
// Example template
---
import Base from "./Base.astro";
---

<!-- Set a custom page title -->
<Base title={ content.title }>
  <!-- Set the header based on frontmatter title -->
  <h1>{ content.title }</h1>
  <!-- Slot is where the rest of the content will fit in -->
  <slot />
</Base>
```

Thanks to layouts I was able to reuse page markup to create a simple layout for individual blog posts.

```astro
// layouts/BlogPostBase.astro
---
import Base from "./Base.astro";

const { content } = Astro.props;
let timestamp = new Date(content.date);
---

<Base title={ content.title }>
  <h1>{ content.title }</h1>
  <time datetime={ timestamp.toISOString() }>{ content.date }</time>
  <slot />
</Base>
```

`BlogPostBase.astro` allows me to have pure markdown posts, I just need specify what layout I want to use.

```md
// pages/blog/post/intro.md
---
layout: ../../../layouts/BlogPostBase.astro
title: The blog
date: June 10, 2022
description: This is where I'll share things like what I've learned, things I've worked on, and improve my writing skills at the same time.
---

The reason for creating this is mostly selfish. I want to improve my writing skills, share what I've learned, and things I've worked on.

Plus, writing in markdown is surprisingly fun!

```
