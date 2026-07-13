---
layout: ../../../layouts/BlogPostBase.astro
title: "Baseline Appreciation"
date: July 12, 2026
description: A small appreciation for the web baseline effort.
---

## Intro

This is a small appreciation post for how far the web has gotten better thanks to the [web platform baseline [web.dev]](https://web.dev/baseline) effort.

Three years ago I wrote some JS to smooth scroll once a link is clicked. The script was about **25-lines** total and was an MVP for what I needed at the time, smooth scrolling _without_ a library. Today, that (and a few other features) have been replaced with CSS-only methods.

**Before**

The 500 byte script below got all the hash links on the page and made it so you could smooth scroll the content into view. It's not perfect, but the previous library I used was 23KB+, which was a problem as I was trying to keep the site under 1MB.

```js
// SmoothScroll.js
const links = document.querySelectorAll("a[href*='#']");

const scrollToElement = (e) => {
  e.preventDefault();

  const anchorHash = e.currentTarget.hash;
  const clickedElement = document.querySelector(`${anchorHash}`);

  if (!clickedElement) {
    throw new Error(`Element doesn't exist with id ${anchorHash}`);
  }

  clickedElement.scrollIntoView({
    behavior: "smooth",
  });

  clickedElement.focus();
};

const init = () =>
  links.forEach((link) => link.addEventListener("click", scrollToElement));

export default init;
```

The `scrollIntoView()` method was made widely available in 2020, which in that time was a huge help to avoiding bloated libraries.

The script itself has a few issues, but the most glaring is that it's missing the ability to update the URL which makes the behavior worse than the default. It's trivial to add, but at that point I felt like I was just reinventing the wheel, so I tried to look for a more modern alternative.

**After**

Thanks to the baseline effort of ensuring feature parity across all browsers in 2022.

```css
/* Smooth scroll effect. */
html {
  scroll-behavior: smooth;
}
```

Using more baseline features, like the `scroll-margin-block-start` you can even control where exactly you want the viewport to appear.

```css
/* When a quote link is clicked, scroll to the top of the quote with space above. */
.quote {
  display: none;
  scroll-margin-block-start: 175px;

  &:target {
    display: block;
  }
}
```

That's it, no libraries, dependencies, or bundles to worry about. I went from 23KB~ to 500 bytes to a **single line**.

Of course, this is just a small example and in the future I might get a collection of practical use cases. In the meantime, you should check out the last few baseline features: [2025](https://web.dev/baseline/2025), [2024](https://web.dev/baseline/2024), and [2023](https://web.dev/baseline/2023).
