---
description: "Configure @unsass/rem: set the $baseline reference or change it at runtime with the config() mixin."
---

# Configuration

Rem converts every value against one baseline — the pixel value that `1rem` represents.

## `$baseline`

The reference size, in `px`. Defaults to `16px` (the browser default).

```scss
@use "@unsass/rem" with (
    $baseline: 16px
);
```

## Runtime configuration with `config()`

When `@use ... with` is not available — for instance because another dependency already configured the module — set
the baseline at runtime with the `config()` mixin.

```scss
@use "@unsass/rem";

@include rem.config(10px);
```

::: tip
A module can only be set up **once** with `@use ... with`, a constraint of the Sass module system. The `config()`
mixin is the supported escape hatch. See the [official documentation](https://sass-lang.com/documentation/at-rules/use#with-mixins)
on overriding configuration with mixins.
:::
