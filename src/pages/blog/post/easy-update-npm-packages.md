---
layout: ../../../layouts/BlogPostBase.astro
title: "Quick tip: Easy npm updates"
date: March 2, 2025
description: A quick tip to easily update npm packages.
---

## The problem

For security and project hygiene you need to constantly monitor and update npm dependencies.

When it's update time, running `npm audit fix` or `npm update` isn't enough. Updates might not be available, there could be incompatibilities, or breaking changes that need additional work.

Things get even more complicated when you have to do this across multiple repos.

## The solution

One tool I've found helpful for staying on top of dependencies is the npm package, [`npm-check-updates`](https://www.npmjs.com/package/npm-check-updates).

It lets you see what updates you can easily make and which require a more thought out plan.

You can run it in your project with the `npx` command to test. Even better, you can run it in interactive mode and group them based on least to most impactful, so you don't accidentally break things on major updates.

The terminal command below will check for package updates and group from patch to major changes.

```sh
npx npm-check-updates -i --format group
```

You should see a list of options broken out from patch to major package updates:

```sh
➜ npmu
Upgrading /web/mejiaj/package.json
[====================] 13/13 100%

? Choose which packages to update ›
  ↑/↓: Select a package
  Space: Toggle selection
  a: Toggle all
  Enter: Upgrade

Patch   Backwards-compatible bug fixes
❯ ◉ eslint-config-prettier   ^10.0.1  →   ^10.0.2
  ◉ sass                     ^1.85.0  →   ^1.85.1

Minor   Backwards-compatible features
  ◉ astro                     ^5.3.0  →    ^5.4.1
  ◉ stylelint               ^16.14.1  →  ^16.15.0
  ◉ typescript                ^5.7.3  →    ^5.8.2
```

Patch and minor, which require no manual updates, are automatically selected. Any major updates are listed, but not selected. This way you can easily update packages and start planning additional work in future sprints.

## Make it easier

I'd recommend saving the command as a ZSH alias so you don't have to think about it in the future.

Here's how I've added it to mine:

```rc
# ~/.zshrc
alias npmu="npx npm-check-updates -i --format group || -y"
```

Then reload your terminal and you can run `npmu` in your project to install, scan, and see your updates. The `-y` flag saves you from typing that yes, you do want to install and run the tool.
