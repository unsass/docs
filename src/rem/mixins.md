---
description: "Reference for @unsass/rem mixins: declaration(), baseline() and config() for rem-based sizing."
---

# Mixins

Accessed through the `rem` namespace (`@use "@unsass/rem"`). Conversions use the configured
[`$baseline`](/rem/configuration).

## `declaration($property, $value, $important)` <Badge type="tip" text="mixin" />

Emits a declaration whose value is converted to `rem`. A thin wrapper over [`convert()`](/rem/functions) plus
[`css.declaration()`](/css/mixins).

| Parameter    | Type      | Default | Description                    |
|--------------|-----------|---------|--------------------------------|
| `$property`  | `string`  | —       | The CSS property.              |
| `$value`     | `any`     | —       | The pixel value(s) to convert. |
| `$important` | `boolean` | `false` | Append `!important`.           |

::: code-group

```scss [SCSS]
@use "@unsass/rem";

.foo {
    @include rem.declaration(margin, 20px 30px);
    @include rem.declaration(border, 1px solid darkcyan);
}
```

```css [CSS]
.foo {
    margin: 1.25rem 1.875rem;
    border: 0.0625rem solid darkcyan;
}
```

:::

## `baseline($important)` <Badge type="tip" text="mixin" />

Emits a root `font-size` that maps `1rem` to the configured baseline. With the default `16px` baseline this is
`100%`, which respects the user's browser font-size preference.

| Parameter    | Type      | Default | Description          |
|--------------|-----------|---------|----------------------|
| `$important` | `boolean` | `false` | Append `!important`. |

::: code-group

```scss [SCSS]
@use "@unsass/rem";

html,
body {
    @include rem.baseline;
}
```

```css [CSS]
html,
body {
    font-size: 100%;
}
```

:::

## `config($baseline)` <Badge type="tip" text="mixin" />

Sets the baseline at runtime. See [Configuration](/rem/configuration#runtime-configuration-with-config).

| Parameter   | Type     | Default | Description              |
|-------------|----------|---------|--------------------------|
| `$baseline` | `number` | `null`  | The new baseline in `px`.|
