---
layout: "../layouts/Base.astro"
title: "Colophon"
---

# Colophon

Colophon is a fancy word I'm using to describe how this site was built. This website was designed and built by me. It's a playground to test new technology and write out thoughts.

This site has evolved from static HTML, to static site generators such as Jekyll, Gatsby, and finally now AstroJS[^1].

**Site requirements**

- [x] Fast
- [x] Open source
- [x] Good developer experience
- [x] Has Markdown and syntax highlighting

Everything is publicly available and hosted on GitHub[^2], so feel free to check it out.

## Design

### Typefaces

- **Main font - Aleo[^3]:** is a variable font, which helps with performance. It also boasts a large variety of weights and styles, which makes it flexible for headings and body text.
- **Code examples - Fira Code[^4]:** Fira Sans is one of my favorite typefaces! I love humanist typefaces in general, which feel more personal. This is the monospace version of it. The creator, Erik Spiekermann is also a big personal design inspiration.

## Technology

- **Visual Studio Code.** My current editor of choice. I've tried Atom, Sublime Text, WebStorm, Macromedia Dreamweaver, and even notepad++!
- **AstroJS for powering the site.** Easy to setup, fast, and supports all sorts of integrations. The developer experience and documentation are _awesome_.
- Markdown for long form writing, it's fun once you get the hang of it!
- **Vanilla JavaScript.** jQuery was nice, but modern JS is so nice these days. Plus, you don't need to build/bundle anything with ES Modules. The performance is unbeatable too.
- **SASS for styling.** I've been using SASS for a **long** time and when I created this site, many modern features didn't exist or had little cross-browser support. I needed variables, functions, mixins, and the ability to manipulate colors.
- **CSS custom properties (CSS variables).** I started experimenting and once it started getting baseline support. I hope to use much more advanced techniques to create themeable components and a light theme.

## Accessibility

- Baseline is WCAG 2.2 AA. This is what we used in the U.S. Web Design System.
- The Deque Axe plugin is used for testing

## Future goals

- **Prototype lightning CSS**. It's fast, light, and supports new native CSS features.
- **More native CSS**. SASS is great, but would like to rely less on compiled and bundled assets.
- **Add web components**. I've experimented with native, StencilJS, and Lit web components. I love how it makes component based designs easier to use and are platform agnostic. For example, you can use web components in many JS frameworks and different CMS's, like Drupal.
- **More automation**. I'd like to add more GitHub actions that check for formatting, linting, and deploy previews.

[^1]: https://astro.build/

[^2]: https://github.com/mejiaj/mejiaj

[^3]: https://fonts.google.com/specimen/Aleo

[^4]: https://fonts.google.com/specimen/Fira+Code
