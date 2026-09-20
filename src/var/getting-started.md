---
description: "Get started with @unsass/var: create var() CSS functions with an optional fallback and read their name and fallback back in Sass."
---

# Var

`@unsass/var` is a Sass toolkit for working with the `var()` CSS function. Create `var()` calls with an optional
fallback, then read their name and fallback back so custom-property logic stays readable and consistent.

> Repository: [github.com/unsass/unsass](https://github.com/unsass/unsass/tree/main/packages/var)

## Install

::: code-group

```sh [npm]
npm install @unsass/var
```

```sh [yarn]
yarn add @unsass/var
```

```sh [pnpm]
pnpm add @unsass/var
```

:::

`@unsass/var` builds on [`@unsass/string`](/string/getting-started), which is installed automatically.

## Basic usage

::: code-group

```scss [SCSS]
@use "@unsass/var";

.foo {
    color: var.create("primary-color", darkcyan);
}
```

```css [CSS]
.foo {
    color: var(--primary-color, darkcyan);
}
```

:::

## Next steps

- [Functions](/var/functions) — the full API.
- [Best Practices](/var/best-practices) — names, fallbacks and parsing.
