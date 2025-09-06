---
layout: ../../../layouts/BlogPostBase.astro
title: "Github Action Improvements"
date: September 06, 2025
description: A walkthrough of how I updated my GitHub Actions to improve code quality, speed up workflows, and make maintenance easier by using composite actions and smarter triggers.
---

## Intro

Two years ago, I added GitHub Actions to this site (in [PR#47](https://github.com/mejiaj/mejiaj/pull/47))! I'm the only developer here, but at the time I wanted to learn how to set up actions and add checks to keep myself honest on code quality.

This way my future self wouldn't have to pay for my past self's actions.

![Original pull request for adding GitHub actions with formatting and linting checks](../../../images/blog/gh-actions-og.webp)
<small>_I've also enabled verified commits since then._</small>

## Why I did this

Since then I've learned more about writing actions. I wanted to apply what I've learned to refresh and improve the old ones. The old workflows were also getting outdated, cluttered, and difficult to maintain.

### My goals

1. Make tests clearer and easier to read.
1. Skip unnecessary runs and avoid duplicates.
1. Learn about composite actions to make scripts easier to read.

## What changed

Before, formatting and linting actions were running _all_ the time on every push and pull request. They ran even when unrelated files changed, so there was plenty of room for improvement.

What changed:

- Actions only run on push **and** skip if unrelated files changed.
- Concurrency stops duplicate actions and cancels old runs for quick follow-up updates.
- Composite actions simplify steps and I learned about reusable actions.
- Actions now have clear names like "Check linting" and "Check formatting" instead of generic ones.

## Before and after

The new setup is easier to read and maintain, plus doesn't run unnecessary checks. Here's a summary of the main changes:

- Ignore changes to files that don’t affect tests.
- Add concurrency to cancel duplicate runs.
- Split the build, format, and lint steps into separate jobs.
- Use a composite action for setup.

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
# Make sure the same job isn't running.
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

Now, it's much clearer on what each action does, unrelated changes don't trigger tests, and the composite action saves two steps for setting up and installing node.

## What I learned

Setting up composite actions were trickier than I expected. I wish the docs had more realistic examples. Still, it was worth the effort to add concurrency and composite actions.

Concurrency and ignoring unrelated files is something that I'll look into more of my future scripts because that could save a lot of time and resources over time.

## Conclusion

Updating the GitHub actions made them faster and easier to read. I learned a lot about composite actions and workflow performance.

I've added the final workflow below if you want to use it as a reference:

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
