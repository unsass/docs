---
description: "Define and consume CSS custom properties with @unsass/css: create references with fallbacks through the declaration() mixin."
---

# Custom Properties

Beyond plain declarations, `@unsass/css` ships a custom-properties helper that lets you **define** and **consume**
CSS variables through the same `declaration()` mixin, with optional fallbacks.

Import the helper alongside the main module:

```scss
@use "@unsass/css";
@use "@unsass/css/custom-properties" as cp;
```

## `cp.create($name, $fallback)` <Badge type="tip" text="function" />

Builds a custom-property reference. A leading `--` is added automatically if you omit it.

| Parameter   | Type     | Default | Description                                  |
|-------------|----------|---------|----------------------------------------------|
| `$name`     | `string` | —       | The variable name, with or without `--`.     |
| `$fallback` | `any`    | `null`  | Optional fallback value (may be another ref).|

## Define a custom property

Pass a reference as the **property** of `declaration()` to emit a variable definition. The fallback becomes the
declared value.

::: code-group

```scss [SCSS]
@use "@unsass/css";
@use "@unsass/css/custom-properties" as cp;

:root {
    @include css.declaration(cp.create("brand", darkcyan));
}
```

```css [CSS]
:root {
    --brand: darkcyan;
}
```

:::

## Consume a custom property

Pass a reference as the **value** to emit a `var()` call. A fallback, if provided, is forwarded into `var()`.

::: code-group

```scss [SCSS]
@use "@unsass/css";
@use "@unsass/css/custom-properties" as cp;

.foo {
    @include css.declaration(color, cp.create("brand"));
    @include css.declaration(background, cp.create("surface", white));
}
```

```css [CSS]
.foo {
    color: var(--brand);
    background: var(--surface, white);
}
```

:::

::: tip Nested fallbacks
A reference's fallback can itself be another reference, producing nested `var()` calls —
`cp.create("a", cp.create("b", red))` emits `var(--a, var(--b, red))`.
:::

## Inspect a reference

The same module exposes helpers to read a reference or resolve it yourself — handy when you build your own mixins on
top of `declaration()`.

### `cp.get-varname($custom-prop)` <Badge type="tip" text="function" />

Returns the custom property name, including the leading `--`.

| Parameter      | Type  | Default | Description                        |
|----------------|-------|---------|------------------------------------|
| `$custom-prop` | `map` | —       | A reference built by `cp.create()`. |

```scss
cp.get-varname(cp.create("brand", darkcyan)); // --brand
```

### `cp.get-fallback($custom-prop)` <Badge type="tip" text="function" />

Returns the fallback of a reference, or `null` when none was set.

| Parameter      | Type  | Default | Description                        |
|----------------|-------|---------|------------------------------------|
| `$custom-prop` | `map` | —       | A reference built by `cp.create()`. |

```scss
cp.get-fallback(cp.create("brand", darkcyan)); // darkcyan
cp.get-fallback(cp.create("brand"));           // null
```

### `cp.is-custom-prop($value)` <Badge type="tip" text="function" />

Returns `true` when the value is a reference built by `cp.create()`.

| Parameter | Type  | Default | Description       |
|-----------|-------|---------|-------------------|
| `$value`  | `any` | —       | The value to test. |

```scss
cp.is-custom-prop(cp.create("brand")); // true
cp.is-custom-prop(16px);               // false
```

### `cp.create-var($custom-prop)` <Badge type="tip" text="function" />

Resolves a reference into a `var()` expression, chaining nested fallbacks. This is what `declaration()` calls when a
reference is passed as the value.

| Parameter      | Type  | Default | Description                        |
|----------------|-------|---------|------------------------------------|
| `$custom-prop` | `map` | —       | A reference built by `cp.create()`. |

```scss
cp.create-var(cp.create("brand", darkcyan)); // var(--brand, darkcyan)
```
