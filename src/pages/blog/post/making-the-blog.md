---
layout: ../../../layouts/BlogPostBase.astro
title: Making the blog
date: July 9, 2022
description: How I created the blog and lessons learned. The intro blog post was 184 characters (31 words) or so the character/word count tool tells me. Despite the low word count, a lot of work went into creating the blog. More than I had originally anticipated.
---

The [intro blog](/blog/post/intro) post was 184 characters (31 words) or so the character/word count tool tells me. Despite the low word count, a lot of work went into creating the blog. More than I had originally anticipated.

Initially this website was created with static HTML/CSS. It only existed to describe myself and show a few select pieces of work. There were brief times I wanted to re-do it using a more flashy technology, but the site was fast and did everything it was supposed to do. There wasn't much benefit of recreating it in a framework when I wasn't going to do any active development on it.

In August of 2021 I discovered [AstroJS](https://astro.build/) and was immediately drawn to it. The freedom the framework offered and I was impressed by how easy it was to get started. I _needed_ to implement it on my site.

I decided that if I wanted to implement a framework I needed to get serious about developing on this site. I created issues [issues](https://github.com/mejiaj/mejiaj/issues) to track work. Major features have their own pull request. I even have [releases](https://github.com/mejiaj/mejiaj/releases) to capture the history of the site.

## May 28, 2022

The original date of the [GitHub issue](https://github.com/mejiaj/mejiaj/issues/26) for creating the blog. That's 22 days ago from when the blog originally launched.

When I created the issue I understood there'd be a lot of things I'd need to figure out and of course like anything in development there were bumps in the road.

Things like:

- Re-familiarizing myself with AstroJS
- Upgrading AstroJS — `1.0.0-beta.36` from `0.20.12`!
- Creating a basic [styleguide](/styleguide) to standardize styles
- Planning and creating the actual blog
- Dealing with dates in JavaScript
- Improving navigation so it shows current page (even if it's nested like this one)
- Refactoring markup to be more semantic
- Other accessibility improvements

## Upgrading astro

In my day to day work we take security very seriously. Part of that is constantly looking at our dependencies and making sure they're up-to-date. Before any serious development started on this new blog I needed to make sure all of my dependencies were up-to-date. You can read more about updating astro in this blog post - [Updating to Astro 1x beta](./updating-to-astro-1x-beta)

## Creating a basic styleguide

So now with an up-to-date environment I could finally re-familiarize myself with the design of the site. I migrated to SASS modules a few months before. There was a lot of work done that I wasn't completely happy with. I still have an issue open for a complete refactor of the SASS, but one problem at a time.

I created this initial [styleguide](/styleguide) to take an inventory of what I had available and what I needed to adjust or remove.

If I was going to start adding more to the site I needed a solid foundation of styles. Specifically spacing and sizing tokens. Then those required their own SASS functions so I could use them easily in my SASS. I didn't want to start implementing features and get burned out because the basics required rewrites.

An example of tokens in SASS

```sass
ul {
  margin-top: units(4);
}
```

This gets a value from a predefined list of spacing units, strips the `px` unit, and finally converts it to `rem` units. So now my spacing and sizing is consistent.

### Creating the blog sections

With a working environment and some solid basic styles in place, I was excited to start creating the blog. I knew I needed to create two pages.

1. A page collecting all posts
1. Pages for individual posts

I know Astro offers scaffolding several types of projects, but since I had gone with the bare bones setup in the beginning I didn't want to scrap my work.

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

## Dealing with dates

If you look at the example above you'll see a date entry. That's used in blog listings and posts in a `<time />` element. This is intentional and is part of the push for more semantic markup on the site. It was also a good refresher on working with dates with native javascript.

The `<time />` represents a specific point in time. You can have a human readable date inside, but you need to specify a valid timestamp in the `datetime` attribute.

Initially I used `date.toDateString()` to get something like `Sun Jun 19 2022`. This was great **until** I realized that it was showing the incorrect date. The `toDateString()` function didn't include a timezone or additional data, so it wasn't returning an accurate date. What worked was switching to `toISOString()` for the timestamp instead of trying to prettify the date.

Yes, I could've used a date library to handle all of this. If I did that then I wouldn't have learned anything and I'd have yet another dependency to worry about.

## Accessibility updates

Accessibility is important to me. This site is still a work in progress, but I felt I needed to dedicate an accessibility pass to all components I touched.

Some work involved

- Removing unnecessary roles (like banner on header element)
- Adding aria attributes to navigation dropdown
- Ensure the use of semantic markup

One of my goals is to integrate automated accessibility testing so I can make sure the site stays accessible.

## Conclusion

As you can see from this long writeup **a lot** of work went into this blog. I enjoyed the challenge and appreciate the lessons learned!

Looking forward to improving the site over time and writing more about what I've learned. Thanks for reading.
