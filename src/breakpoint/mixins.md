---
description: "Reference for @unsass/breakpoint mixins: up, down, only, between and config for composable responsive media queries."
---

# Mixins

Accessed through the `breakpoint` namespace (`@use "@unsass/breakpoint"`).

## `up($token)` <Badge type="tip" text="mixin" />

Applies a `min-width` media query — styles take effect at the token width and above.

| Parameter | Type     | Default | Description                        |
|-----------|----------|---------|------------------------------------|
| `$token`  | `string` | —       | A key from the configured tokens.  |

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

## `down($token)` <Badge type="tip" text="mixin" />

Applies a `max-width` media query — styles take effect below the token width. The maximum is the token value minus
`1px` to avoid overlap with `up()`.

| Parameter | Type     | Default | Description                        |
|-----------|----------|---------|------------------------------------|
| `$token`  | `string` | —       | A key from the configured tokens.  |

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
@media (max-width: 959px) {
    .foo {
        color: darkcyan;
    }
}
```

:::

## `only($token)` <Badge type="tip" text="mixin" />

Targets a single breakpoint range: from the token width up to just before the **next** token. For the last token it
falls back to `up()`.

| Parameter | Type     | Default | Description                        |
|-----------|----------|---------|------------------------------------|
| `$token`  | `string` | —       | A key from the configured tokens.  |

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
@media (min-width: 960px) and (max-width: 1199px) {
    .foo {
        color: darkcyan;
    }
}
```

:::

## `between($min, $max)` <Badge type="tip" text="mixin" />

Targets a custom range between two tokens. The upper bound is the `$max` token value minus `1px`.

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
@media (min-width: 768px) and (max-width: 1199px) {
    .foo {
        color: darkcyan;
    }
}
```

:::

## `config($screens, $reset)` <Badge type="tip" text="mixin" />

Adjusts the active tokens at runtime. See [Configuration](/breakpoint/configuration#runtime-configuration-with-config).

| Parameter  | Type      | Default | Description                                        |
|------------|-----------|---------|----------------------------------------------------|
| `$screens` | `map`     | `()`    | Tokens to merge over (or replace) the current set. |
| `$reset`   | `boolean` | `false` | Replace all tokens instead of merging.             |
