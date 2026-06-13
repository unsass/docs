---
description: "Reference for @unsass/em: the convert() function for context-relative pixel-to-em conversion."
---

# Functions

Accessed through the `em` namespace (`@use "@unsass/em"`).

## `convert($values...)` <Badge type="tip" text="function" />

Converts pixel values to `em`. Pass any number of values followed by the **context** as the **last argument** — the
pixel value that `1em` represents. Non-pixel parts of a value (keywords, colors, `0`) pass through untouched.

| Parameter   | Type      | Default | Description                                                       |
|-------------|-----------|---------|-------------------------------------------------------------------|
| `$values…`  | `arglist` | —       | Values to convert; the **last** item is the context (in `px`).    |

::: warning
The context is mandatory and must be a number in `px` (or unitless). Omitting it, or passing a non-number, raises a
compile-time error.
:::

::: code-group

```scss [SCSS]
@use "@unsass/em";

.foo {
    font-size: em.convert(16px, 16px);            // single value
    margin: em.convert(16px 20px, 16px);          // list of values
    border: em.convert(1px solid darkcyan, 16px); // mixed value
}
```

```css [CSS]
.foo {
    font-size: 1em;
    margin: 1em 1.25em;
    border: 0.0625em solid darkcyan;
}
```

:::
