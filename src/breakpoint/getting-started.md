---
description: "Get started with @unsass/breakpoint: centralized, composable responsive breakpoints with up, down, only and between mixins."
---

# Breakpoint

`@unsass/breakpoint` is a small, dependency-free Sass toolkit for managing responsive breakpoints. Define named
breakpoints centrally and apply them with concise, composable mixins so media-query logic stays readable and
consistent.

It supports named breakpoints and logical operators (`up`, `down`, `only`, `between`) so you can reuse breakpoint
semantics across your stylesheets without duplicating raw pixel values.

> Repository: [github.com/unsass/breakpoint](https://github.com/unsass/breakpoint)

## Install

::: code-group

```sh [npm]
npm install @unsass/breakpoint
```

```sh [yarn]
yarn add @unsass/breakpoint
```

```sh [pnpm]
pnpm add @unsass/breakpoint
```

:::

::: warning Requirement
Breakpoint relies on the modern Sass `if()` syntax, so a Dart Sass compiler **`>= 1.95.0`** is required.
:::

## Basic usage

::: code-group

```scss [SCSS]
@use "@unsass/breakpoint";

.foo {
    @include breakpoint.up("lg") {
        color: darkcyan;
    }
}
```

```css [CSS]
@media (min-width: 960px) {
    .foo {
        color: darkcyan;
    }
}
```

:::

## Next steps

- [Configuration](/breakpoint/configuration) — customize or extend the breakpoint tokens.
- [Functions](/breakpoint/functions) and [Mixins](/breakpoint/mixins) — the full API.
- [Best Practices](/breakpoint/best-practices) — mobile-first patterns and pitfalls.
