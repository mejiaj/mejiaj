---
layout: "../layouts/Base.astro"
title: "Colophon"
---

# Colophon

Colophon is a fancy word to describe how this site was made. I designed and developed this site from scratch. It's a playground where I experiment with new technology and write out my thoughts.

The site has evolved from static HTML, to static site generators such as Jekyll, Gatsby, and finally now AstroJS[^1].

**Site requirements** <br>
Minimum requirements to selecting a framework.

- [x] Fast
- [x] Open source
- [x] Good developer experience
- [x] Has Markdown and syntax highlighting

Everything is publicly available and hosted on GitHub[^2], so feel free to check it out.

## Design

### Typefaces

- **Main font - Aleo[^3]:** is a variable font, which is good for performance. It has a wide range of weights and styles, which makes perfect for both headings and copy.
- **Code examples - Fira Code[^4]:** Fira Mono is the monospace version of Fira Sans, one of my favorite typefaces! I love humanist typefaces, because they feel more personal. It's creator, Erik Spiekermann, is also a big design inspiration to me.

## Technology

- **Visual Studio Code.** My current editor. I've tried everything from: Atom, Sublime Text, WebStorm, Macromedia Dreamweaver, and even notepad++! The things I look for in a good editor are: its gotta be fast, have themes with good contrast, and plugins need to be actively maintained.
- **AstroJS for powering the site.** Easy to setup, really fast, and supports all kinds of integrations. The dev experience and documentation are _awesome_.
- **Markdown.** For long form writing, it's fun once you get the hang of it!
- **Vanilla JavaScript.** Modern JS is so nice these days. Plus, you can skip the build/bundle process with ES Modules. The performance is unbeatable too.
- **SASS for styling.** I've used SASS for a **long** time. When I first created this site, many modern features either didn't exist or had little browser support. At the time, SASS gave me what I needed: variables, functions, mixins, and the ability to easily manage colors. It's still good, but I'm trying to rely more on native CSS.
- **CSS custom properties (CSS variables).** I've started experimenting and once it started getting baseline support. I hope to use much more advanced techniques to create themeable components and a light theme.

## Accessibility

Baseline for accessibility is **WCAG 2.2 AA**. This is what we used in the U.S. Web Design System. I also use the Deque Axe plugin[^5] for testing.

## Future goals

- **Prototype lightning CSS**. It's fast, light, and supports new native CSS features.
- **More native CSS**. SASS is great, but would like to rely less on compiled and bundled assets. My goal is to have design tokens in CSS variables, reduce the need for per-page custom styles, and reduce the bundle size as much as possible.
- **Add web components**. I've experimented with native, StencilJS, and Lit web components. I love how it makes component based designs easier to use and are platform agnostic. For example, you can use web components in many JS frameworks and different CMS's, like Drupal.
- **More automation**. I'd like to add more GitHub actions that check for formatting, linting, and deploy previews.

[^1]: https://astro.build/

[^2]: https://github.com/mejiaj/mejiaj

[^3]: https://fonts.google.com/specimen/Aleo

[^4]: https://fonts.google.com/specimen/Fira+Code

[^5]: https://www.deque.com/axe/browser-extensions/
