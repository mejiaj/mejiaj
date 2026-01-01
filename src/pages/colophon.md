---
layout: "../layouts/Base.astro"
title: "Colophon"
---

# Colophon

Colophon is a fancy word to describe how this site was made. I designed and developed this site from scratch. It's a playground where I experiment with new technology and write out my thoughts.

The site has evolved from static HTML to static site generators like: Jekyll, Gatsby, and finally now AstroJS[^1].

**Site requirements** <br>
My minimum requirements to selecting a framework:

- Fast
- Open source
- Good developer experience
- Markdown support and syntax highlighting

Everything is publicly available and hosted on GitHub[^2], so feel free to check it out.

## Design

### Typefaces

- **Aleo[^3]**. The main font, it's a variable font, which is good for performance because it doesn't load everything at once. It has a wide range of weights and styles, which make it perfect for both headings and copy.
- **Fira Code[^4]**. Used in code examples. It's the monospace version of Fira Sans, one of my favorite typefaces! I love humanist typefaces, because they feel more personal. Its original creator, Erik Spiekermann, is also a big design inspiration.

## Technology

- **Visual Studio Code.** My current editor. I like to experiment and know what's out there. A good editor needs to be fast, have themes with good contrast, and plugins that are actively maintained.
- **AstroJS.** Used to build the website. It's easy to setup, really fast, and offers a lot of flexibility with other frameworks and tools.
- **Markdown.** For long form writing, it's fun once you get the hang of it!
- **Vanilla JavaScript.** Modern JS is so nice these days. Plus, you can skip the build/bundle process with ES Modules. The performance is unbeatable too.
- **CSS/SASS.** I've used SASS for a **long** time. When I first created this site, many modern features either didn't exist or had little browser support. At the time, SASS gave me what I needed: variables, functions, mixins, and the ability to easily manage colors. It's still good, but I'm trying to rely less on SASS and more on modern CSS.

## Accessibility

Accessibility is a big priority, my baseline is **WCAG 2.2 AA**.

### Testing

I use the Deque Axe plugin[^5] and later added automated checks with pa11y. If you want to learn more about it, checkout the post: [Automated accessibility testing in Astro with Pa11y CI](/blog/post/09-15-2025-astro-a11y).

## Future goals

- **Case studies.** I'd like to bring back case studies to show my approach to work, challenges, and what I've learned.
- **Publish styleguide.** Not a full-fledged design system, but want to document and publish the tokens used to build the site.
- **Migrate to PostCSS.** I use SASS for BEM-style nesting and managing media queries. I want to apply modern CSS features with a little help from PostCSS. Also, it already comes included with Vite[^6].
- **Add web components**. I've experimented with native, StencilJS, and Lit web components. I love how it makes component based designs easier to use and are platform agnostic. For example, you can use web components in many JS frameworks and different CMS's, like Drupal. It's refreshing to build something once and be able to use it in different tech stacks.

### Completed goals

- ~**More native CSS**. SASS is great, but I'd like to rely less on compiled and bundled assets.~ Using more CSS basline features and will plan on trying to move away from SASS completely.
- ~**More automation**. I'd like to add more GitHub actions that check for formatting, linting, and deploy previews.~ Automated checks have been added for formatting, linting, and a11y testing.
- ~**Prototype lightning CSS**. It's fast, light, and supports new native CSS features.~ Still too experimental for me, but will keep an eye on it.

## Changelog

| Date       | Description                       |
| :--------- | :-------------------------------- |
| 01-01-2026 | Formatting updates and new goals. |

[^1]: https://astro.build/

[^2]: https://github.com/mejiaj/mejiaj

[^3]: https://fonts.google.com/specimen/Aleo

[^4]: https://fonts.google.com/specimen/Fira+Code

[^5]: https://www.deque.com/axe/browser-extensions/

[^6]: https://docs.astro.build/en/guides/styling/#postcss
