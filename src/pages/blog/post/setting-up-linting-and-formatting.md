---
layout: ../../../layouts/BlogPostBase.astro
title: Setting up linting & formatting
date: May 12, 2023
description:
  A quick walkthrough on setting up linting & formatting checks using stylelint,
  eslint, and prettier.
---

A quick walkthrough on setting up linting & formatting checks using stylelint,
eslint, and prettier. Whether your working solo or on a team setting up linting
and formatting is important. Benefits of doing this:

1. Easily catch errors before they happen.
1. Set consistent style rules to follow best practices.
1. Learn best practices for modern workflows.
1. Improve the overall quality of your work.

## Getting started

To get started we're going to install a few NPM packages.

**Dependencies we're going to install:**

- eslint
- eslint-config-airbnb-base
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-promise
- prettier
- stylelint
- @18f/identity-stylelint-config ⏤ I need this one for work, but they're good
  rules.

Install the packages with the following NPM command:

```bash
→ npm install --save-dev eslint stylelint prettier eslint-config-airbnb-base @18f/identity-stylelint-config eslint-plugin-prettier eslint-config-prettier eslint-plugin-import eslint-plugin-promise
```

## Create config files

Create config files for eslint and prettier settings.

First lets setup stylelint config. This one is pretty simple. We're just using
the 18F stylelint plugin.

```yaml
# .stylelintrc
extends: "@18f/identity-stylelint-config"
```

And one for eslint. If you're working on web projects you'll need to add
`browser` and `es2021` into your environment key. Below that we're defining the
plugins we've downloaded. This avoids us having to write out own rules.
Eslint-config-prettier avoids prettier and eslint rules conflicting with each
other.

```yaml
# .eslintrc.yml
env:
  browser: true
  es2021: true
extends: ["airbnb-base", "eslint-config-prettier"]
overrides: []
parserOptions:
  ecmaVersion: latest
  sourceType: module
rules: {}
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
