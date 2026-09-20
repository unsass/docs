---
description: "Get started with @unsass/types: check whether a Sass value is a number, string, color, list, map, boolean or null."
---

# Types

`@unsass/types` is a Sass toolkit for checking the type of a value. Each `is-*` function wraps `meta.type-of()` in a
readable predicate, so conditions and input validation stay concise and consistent.

It is the building block behind the input checks of other UnSass packages, and it is just as handy in your own
functions and mixins.

> Repository: [github.com/unsass/unsass](https://github.com/unsass/unsass/tree/main/packages/types)

## Install

::: code-group

```sh [npm]
npm install @unsass/types
```

```sh [yarn]
yarn add @unsass/types
```

```sh [pnpm]
pnpm add @unsass/types
```

:::

## Basic usage

::: code-group

```scss [SCSS]
@use "@unsass/types";

$width: 12px;

.foo {
    @if types.is-number($width) {
        width: $width;
    }
}
```

```css [CSS]
.foo {
    width: 12px;
}
```

:::

## Next steps

- [Functions](/types/functions) — the full API.
- [Best Practices](/types/best-practices) — validating input and choosing the right check.
