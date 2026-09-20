---
description: "Reference for @unsass/breakpoint mixins: up, down, only, between and config for composable responsive media queries."
---

# Mixins

Accessed through the `breakpoint` namespace (`@use "@unsass/breakpoint"`).

::: warning
`up()`, `down()`, `only()` and `between()` raise an `@error` when a token doesn't exist, listing the available
ones.
:::

## `up($token)`

Emits a `min-width` media query: the styles apply from the token's viewport width and up.

| Parameter | Type     | Default | Description                       |
|-----------|----------|---------|-----------------------------------|
| `$token`  | `string` | —       | A key from the configured tokens. |

::: code-group

```scss [SCSS]
@use "@unsass/breakpoint";

.foo {
    @include breakpoint.up("lg") {
        color: darkcyan;
    }
}
```

```css [CSS]
@media (min-width: 960px) {
    .foo {
        color: darkcyan;
    }
}
```

:::

## `down($token)`

Emits a `max-width` media query: the styles apply below the token's viewport width. The maximum is the token value
minus `0.02px`, so it never overlaps `up()` on fractional viewport widths.

| Parameter | Type     | Default | Description                       |
|-----------|----------|---------|-----------------------------------|
| `$token`  | `string` | —       | A key from the configured tokens. |

::: code-group

```scss [SCSS]
@use "@unsass/breakpoint";

.foo {
    @include breakpoint.down("lg") {
        color: darkcyan;
    }
}
```

```css [CSS]
@media (max-width: 959.98px) {
    .foo {
        color: darkcyan;
    }
}
```

:::

## `only($token)`

Targets a single breakpoint range: from the token's width up to just before the **next** token. The last token has no
upper bound, so `only()` falls back to `up()`.

| Parameter | Type     | Default | Description                       |
|-----------|----------|---------|-----------------------------------|
| `$token`  | `string` | —       | A key from the configured tokens. |

::: code-group

```scss [SCSS]
@use "@unsass/breakpoint";

.foo {
    @include breakpoint.only("lg") {
        color: darkcyan;
    }
}
```

```css [CSS]
@media (min-width: 960px) and (max-width: 1199.98px) {
    .foo {
        color: darkcyan;
    }
}
```

:::

## `between($min, $max)`

Targets a custom range between two tokens. The upper bound is the `$max` token value minus `0.02px`. `$min` must be
smaller than `$max`, otherwise the mixin raises an `@error`.

| Parameter | Type     | Default | Description                          |
|-----------|----------|---------|--------------------------------------|
| `$min`    | `string` | —       | Lower-bound token (inclusive).       |
| `$max`    | `string` | —       | Upper-bound token (exclusive width). |

::: code-group

```scss [SCSS]
@use "@unsass/breakpoint";

.foo {
    @include breakpoint.between("md", "xl") {
        color: darkcyan;
    }
}
```

```css [CSS]
@media (min-width: 768px) and (max-width: 1199.98px) {
    .foo {
        color: darkcyan;
    }
}
```

:::

## `config($screens, $reset)`

Adjusts the active tokens at runtime. See [Configuration](/breakpoint/configuration#runtime-configuration-with-config).

| Parameter  | Type      | Default | Description                                        |
|------------|-----------|---------|----------------------------------------------------|
| `$screens` | `map`     | `()`    | Tokens to merge over (or replace) the current set. |
| `$reset`   | `boolean` | `false` | Replace all tokens instead of merging.             |
