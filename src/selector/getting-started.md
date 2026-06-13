---
description: "Get started with @unsass/selector: generate prefixed, suffixed and pseudo class selectors from one Sass mixin."
---

# Selector

`@unsass/selector` is a Sass toolkit for generating CSS class selectors: prefixed or suffixed scopes, pseudo-classes
and pseudo-elements, all from a single expressive mixin.

It's well suited to utility-style class names like `.md\:foo` or stateful variants like `.foo:hover`, generated
programmatically instead of written by hand.

> Repository: [github.com/unsass/selector](https://github.com/unsass/selector)

## Install

::: code-group

```sh [npm]
npm install @unsass/selector
```

```sh [yarn]
yarn add @unsass/selector
```

```sh [pnpm]
pnpm add @unsass/selector
```

:::

## Basic usage

::: code-group

```scss [SCSS]
@use "@unsass/selector";

@include selector.create("foo", "md") {
    color: darkcyan;
}
```

```css [CSS]
.md\:foo {
    color: darkcyan;
}
```

:::

## Next steps

- [Functions](/selector/functions) and [Mixins](/selector/mixins) — the full API.
- [Best Practices](/selector/best-practices) — naming conventions and constraints.
