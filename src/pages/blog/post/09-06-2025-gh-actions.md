---
layout: ../../../layouts/BlogPostBase.astro
title: Revisiting Github Actions
date: September 06, 2025
description: TK
---

## Intro

I originally added GitHub actions on this site _2 years ago_ in [PR#47](https://github.com/mejiaj/mejiaj/pull/47)! Even though I'm the only developer for this site, I wanted to learn how to setup actions and add some checks to make sure I was being kept honest on code quality, so future me wouldn't have to pay for past me's actions.

![Original pull request for adding GitHub actions with formatting and linting checks](../../../images/blog/gh-actions-og.webp)

## Why I did this

Since then I've become a little more comfortable with writing actions and I wanted to apply what I've learned to refresh and improve the old ones. The old workflows were also getting dated, cluttered, and difficult to maintain.

### Goals

1. **Add clarity to tests:** Show in actions what's running specifically and improve readability in the scripts themselves.
1. **Improve performance:** Avoid duplicate runs and avoid running when something unrelated was updated (like config files).
1. **Learn about composite actions (bonus):** If everything went well, I wanted to push a little further and learn about composite actions to improve readability of the scripts.

## What I did

Formatting and linting actions were running _all_ the time on both push and pull requests. So when I created draft PR's, duplicates were running. They also ran when I changed files that weren't related, so there was plenty of room for improvement.

Here's a basic breakdown of what I did:

- Only run on push **and** ignore if unrelated files changed.
- Use concurrency to avoid running duplicate actions and improve the experience for quick follow-up pushes.
- Improve readability of the script by using a composite action—this was also a learning goal for me!
- Improve readability of actions so I know what's running in the GitHub interface, so "Check linting", "Check formatting", etc. instead of a generic "Run tests" action.

## Before and after

Here's the full diff to compare the before and after:

```diff
# .github/workflows/ci.yml
name: CI
# 1. Run on push to always test for issues.
- on: [push, pull_request]
# 2. Don't run if any of these unrelated files have changed.
+ on:
+   push:
+     paths-ignore:
+       - ".github/**"
+       - ".nvmrc"
+       - ".npmrc"
+       - ".gitignore"
+       - "public/**"
+
# 3. Add concurrency so that builds can be cancelled and there aren't duplicates.
+ concurrency:
# This checks to make sure the same job isn't running.
+   group: ci-${{ github.ref }}
+   cancel-in-progress: true

jobs:
# 4. Replace generic `build` job since it wasn't accurate and was doing a lot more.
-   build:
-     runs-on: ubuntu-latest
-     steps:
-       - name: Checkout code
-         uses: actions/checkout@v3
-       - name: Install packages
-         run: npm i
-       - name: Check linting
-         run: npm run lint
-       - name: Check formatting
-         run: npm run prettier
# 5. Separate scripts into build, formatting, and linting tests.
+   build:
+     runs-on: ubuntu-latest
+     steps:
+       - uses: actions/checkout@v5
# 6. Use a composite action to improve readability and avoid having to specify repetitive setup steps, like setting up and installing node.
+       - uses: ./.github/actions/setup
+       - name: Build site & styles
+         run: npm run build && npm run build:sass
+
+   format:
+     runs-on: ubuntu-latest
+     steps:
+       - uses: actions/checkout@v5
+       - uses: ./.github/actions/setup
+       - name: Check formatting
+         run: npm run prettier
+
+   lint:
+     runs-on: ubuntu-latest
+     needs: format
+     steps:
+       - uses: actions/checkout@v5
+       - uses: ./.github/actions/setup
+       - name: Check linting
+         run: npm run lint
```

## Highlights/results

Now it's much clearer on what's being run, actions aren't run if unrelated files are changed, and I got to add a composite action to save two steps for setting up and installing node.

## What I learned

Composite actions were trickier than I expected and I wish the docs had more realistic examples, but it was worth the effort.

Concurrency and ignoring unrelated files is something that I'll look into more of my future scripts because that could save a lot of time and resources over time.

## Conclusion

I'm happy I got to update my actions, improve performance and readability, and learn about composite actions.

Here's the final file action below if you want to use it as a reference:

```yml
# .github/workflows/ci.yml
name: CI
on:
  push:
    paths-ignore:
      - ".github/**"
      - ".nvmrc"
      - ".npmrc"
      - ".gitignore"
      - "public/**"

concurrency:
  group: ci-${{ github.ref }}
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - uses: ./.github/actions/setup
      - name: Build site & styles
        run: npm run build && npm run build:sass

  format:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v5
      - uses: ./.github/actions/setup
      - name: Check formatting
        run: npm run prettier

  lint:
    runs-on: ubuntu-latest
    needs: format

    steps:
      - uses: actions/checkout@v5
      - uses: ./.github/actions/setup
      - name: Check linting
        run: npm run lint
```

You can also see it in the repository, [here](https://github.com/mejiaj/mejiaj/tree/main/.github/actions).
