---
description: "Define and consume CSS custom properties with @unsass/css: create references with fallbacks through the declaration() mixin."
---

# Custom Properties

Beyond plain declarations, `@unsass/css` ships a custom-properties helper that lets you **define** and **consume**
CSS custom properties through the same `declaration()` mixin, with optional fallbacks.

References are built with [`cp.create()`](/css/functions#cp-create-name-fallback). Import the helper alongside the main module:

```scss
@use "@unsass/css";
@use "@unsass/css/custom-properties" as cp;
```

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

## Going further

The `cp` module also exposes helpers to read a reference or resolve it yourself — see [Functions](/css/functions).
