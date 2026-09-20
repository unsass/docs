---
description: "Get started with @unsass/string: replace, trim, test and combine strings with small, composable Sass functions."
---

# String

`@unsass/string` is a Sass toolkit for manipulating strings: replace and trim substrings, test prefixes and suffixes,
convert between strings and numbers, and combine class-like names.

It also forwards the Sass built-in [`sass:string`](https://sass-lang.com/documentation/modules/string) functions, so
`string.length()`, `string.slice()` and friends are available through the same namespace.

> Repository: [github.com/unsass/unsass](https://github.com/unsass/unsass/tree/main/packages/string)

## Install

::: code-group

```sh [npm]
npm install @unsass/string
```

```sh [yarn]
yarn add @unsass/string
```

```sh [pnpm]
pnpm add @unsass/string
```

:::

## Basic usage

::: code-group

```scss [SCSS]
@use "@unsass/string";

$name: string.combine("button", "label");

.#{$name} {
    color: darkcyan;
}
```

```css [CSS]
.button-label {
    color: darkcyan;
}
```

:::

## Next steps

- [Functions](/string/functions) — the full API.
- [Best Practices](/string/best-practices) — trimming, replacing and combining safely.
