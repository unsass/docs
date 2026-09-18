---
description: "Get started with @unsass/rem: convert pixel values to rem units against a single configurable baseline."
---

# Rem

`@unsass/rem` provides a consistent way to express CSS lengths in `rem`, converting from pixels against a single,
configurable baseline.

Unlike `em`, `rem` always resolves against the document root, so conversions need no per-call context — just one
baseline for the whole project.

> Repository: [github.com/unsass/rem](https://github.com/unsass/rem)

## Install

::: code-group

```sh [npm]
npm install @unsass/rem
```

```sh [yarn]
yarn add @unsass/rem
```

```sh [pnpm]
pnpm add @unsass/rem
```

:::

::: warning Requirement
Rem builds on [`@unsass/css`](/css/getting-started) (installed automatically), which relies on the modern Sass `if()` syntax, so a Dart Sass compiler **`>= 1.95.0`** is required.
:::

## Basic usage

::: code-group

```scss [SCSS]
@use "@unsass/rem";

.foo {
    font-size: rem.convert(16px);
}
```

```css [CSS]
.foo {
    font-size: 1rem;
}
```

:::

## Next steps

- [Configuration](/rem/configuration) — set the baseline.
- [Functions](/rem/functions) and [Mixins](/rem/mixins) — the full API.
- [Best Practices](/rem/best-practices) — what to convert and what to leave alone.
