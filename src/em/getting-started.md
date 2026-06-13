---
description: "Get started with @unsass/em: convert pixel values to context-relative em units in your Sass stylesheets."
---

# Em

`@unsass/em` provides a consistent way to express CSS lengths in `em`, converting from pixels against an explicit
context value.

Because `em` is relative to the font size of the current element (or its parent), every conversion takes a
**context** — the pixel value that `1em` should represent.

> Repository: [github.com/unsass/em](https://github.com/unsass/em)

## Install

::: code-group

```sh [npm]
npm install @unsass/em
```

```sh [yarn]
yarn add @unsass/em
```

```sh [pnpm]
pnpm add @unsass/em
```

:::

## Basic usage

The last argument is always the context.

::: code-group

```scss [SCSS]
@use "@unsass/em";

.foo {
    font-size: em.convert(16px, 16px);
}
```

```css [CSS]
.foo {
    font-size: 1em;
}
```

:::

## Next steps

- [Functions](/em/functions) and [Mixins](/em/mixins) — the `convert()` function and `declaration()` mixin in detail.
- [Best Practices](/em/best-practices) — choosing the right context.
