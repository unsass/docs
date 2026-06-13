---
description: "Get started with @unsass/css: Sass mixins for CSS declarations and selectors, with first-class custom-property support."
---

# CSS

`@unsass/css` is a set of Sass mixins for emitting CSS declarations and selectors consistently — with built-in
support for defining and consuming CSS custom properties.

> Repository: [github.com/unsass/css](https://github.com/unsass/css)

## Install

::: code-group

```sh [npm]
npm install @unsass/css
```

```sh [yarn]
yarn add @unsass/css
```

```sh [pnpm]
pnpm add @unsass/css
```

:::

## Basic usage

::: code-group

```scss [SCSS]
@use "@unsass/css";

.foo {
    @include css.declaration(color, darkcyan);
}
```

```css [CSS]
.foo {
    color: darkcyan;
}
```

:::

## Next steps

- [Configuration](/css/configuration) — work with CSS custom properties.
- [Mixins](/css/mixins) — the `declaration()` and `selector()` mixins in detail.
- [Best Practices](/css/best-practices) — when to reach for each mixin.
