---
description: "Learn what UnSass is: a modular suite of dependency-free Sass packages, each solving one CSS concern with validated, composable APIs."
---

# What is UnSass?

UnSass is a suite of small, dependency-free Sass packages. Each one solves a single CSS authoring concern, ships and
versions independently, and emits plain, standard CSS — so you install only what a project needs, nothing more.

## The packages

| Package | Purpose |
|---------|---------|
| **[@unsass/breakpoint](/breakpoint/getting-started)** | Centralized, composable responsive breakpoints. |
| **[@unsass/css](/css/getting-started)** | CSS declarations and selectors, with custom-property support. |
| **[@unsass/em](/em/getting-started)** | Context-relative pixel-to-`em` conversion. |
| **[@unsass/rem](/rem/getting-started)** | Baseline-relative pixel-to-`rem` conversion. |
| **[@unsass/selector](/selector/getting-started)** | Prefixed, suffixed and pseudo selector generation. |

## Principles

### 🧩 Modular

No meta-package, no kitchen sink. Every package stands on its own, so your dependency graph stays as small as the
features you actually use.

### 🛡️ Validated

Mixins and functions check their inputs and raise explicit `@error` messages. Mistakes — an unknown breakpoint
token, a wrong unit, a non-class selector — surface at compile time instead of as silently wrong CSS.

### 🧱 Consistent

A shared authoring style runs across the suite: the same `@use` conventions, the same configuration patterns, and a
uniform API reference split into **Functions** and **Mixins**.

### 🪶 Dependency-free output

The Sass logic stays at build time. UnSass produces clean, standard CSS and ships nothing to the browser.

## Requirements

UnSass targets the modern Dart Sass module system (`@use` / `@forward`).

::: warning
`@unsass/breakpoint` relies on the modern Sass `if()` syntax and requires a Dart Sass compiler **`>= 1.95.0`**.
:::

## Next steps

- [Installation](/guide/installation) — add a package and wire it up.
- [Best Practices](/guide/best-practices) — conventions that apply across the suite.
