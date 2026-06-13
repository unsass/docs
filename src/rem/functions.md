---
description: "Reference for @unsass/rem: the convert() function for baseline-relative pixel-to-rem conversion."
---

# Functions

Accessed through the `rem` namespace (`@use "@unsass/rem"`). Conversions use the configured
[`$baseline`](/rem/configuration).

## `convert($values...)` <Badge type="tip" text="function" />

Converts pixel values to `rem`. Accepts single values, space-separated lists, and comma-separated lists. Non-pixel
parts of a value (keywords, colors, `0`) pass through untouched.

| Parameter   | Type      | Default | Description                |
|-------------|-----------|---------|----------------------------|
| `$values…`  | `arglist` | —       | The value(s) to convert.   |

::: code-group

```scss [SCSS]
@use "@unsass/rem";

.foo {
    font-size: rem.convert(16px);            // 1rem
    margin: rem.convert(20px 30px);          // 1.25rem 1.875rem
    border: rem.convert(1px solid darkcyan); // 0.0625rem solid darkcyan
    box-shadow: rem.convert(0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75));
}
```

```css [CSS]
.foo {
    font-size: 1rem;
    margin: 1.25rem 1.875rem;
    border: 0.0625rem solid darkcyan;
    box-shadow: 0 0 0.625rem 0.3125rem rgba(0, 139, 139, 0.75), inset 0 0 0.625rem 0.3125rem rgba(0, 139, 139, 0.75);
}
```

:::
