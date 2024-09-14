---
layout: ../../../layouts/BlogPostBase.astro
title: Setting up linting & formatting
date: September 14, 2024
description:
  A quick walkthrough on setting up linting & formatting checks using stylelint,
  eslint, and prettier.
---

**Note**
This post was originally published May 12, 2023. I've since updated it after a major Eslint version update.

A quick walkthrough on setting up linting & formatting checks using stylelint,
eslint, and prettier. Whether your working solo or on a team setting up linting
and formatting is important. Benefits of doing this:

1. Easily catch errors before they happen.
1. Set consistent style rules to follow best practices.
1. Learn best practices for modern workflows.
1. Improve the overall quality of your work.

## Getting started

To get started we're going to install a few NPM packages.

I'm going to be following the [ESLint Quickstart guide](https://eslint.org/docs/latest/use/getting-started).

**Dependencies we're going to install:**

- eslint
- eslint-config-prettier
- prettier
- stylelint
- @18f/identity-stylelint-config ⏤ I need this one for work, but they're good rules.

Install the packages with the following NPM command:

```bash
→ npm init @eslint/config@latest
```

Working through the options, I'm going to select `problems` option with `JavaScript modules` because I use vanilla JS.

```bash
→ npm init @eslint/config@latest
  Need to install the following packages:
  @eslint/create-config@1.3.1
  Ok to proceed? (y) y
  @eslint/create-config: v1.3.1

  ✔ How would you like to use ESLint? · problems
  ? What type of modules does your project use? …
  ❯ JavaScript modules (import/export)
    CommonJS (require/exports)
    None of these
```

## Create config files

The init command above automatically creates a `eslint.config.mjs` config for me.

I'm going to add the ESLint integration for prettier to avoid conflicts between them.

```bash
→ npm i -S -D eslint-config-prettier
```

## Adding scripts

Save yourself some time and write some NPM scripts to quickly test and fix
issues.

```json
// package.json
"scripts": {
  "lint": "npm run lint:sass & npm run lint:js",
  "lint:js": "npx eslint './src/**/*.js'",
  "lint:sass": "npx stylelint '**/*.scss'",
  "lint:fix:js": "npx eslint --fix './src/**/*.js'",
  "lint:fix:sass": "npx stylelint --fix '**/*.{sass,scss}'",
  "prettier": "npx prettier --check './src/**/*.{css,scss,sass,js}'",
  "prettier:fix:js": "npx prettier --write './src/**/*.js'",
  "prettier:fix:sass": "npx prettier --write '**/*.{sass,scss}'",
}
```

It might look like a lot, but we're setting up tests for:

1. Linting
1. Test formatting
1. Fixing issues

That's it! You can now test locally or in a [CI] workflow

\*[CI]: Continuous Integration
