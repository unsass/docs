---
description: "Reference for @unsass/em: the declaration() mixin that emits em-converted CSS declarations."
---

# Mixins

Accessed through the `em` namespace (`@use "@unsass/em"`).

## `declaration($property, $value, $context, $important)` <Badge type="tip" text="mixin" />

Emits a declaration whose value is converted to `em`. A thin wrapper over [`convert()`](/em/functions) plus
[`css.declaration()`](/css/mixins).

| Parameter    | Type      | Default | Description                              |
|--------------|-----------|---------|------------------------------------------|
| `$property`  | `string`  | —       | The CSS property.                        |
| `$value`     | `any`     | —       | The pixel value(s) to convert.           |
| `$context`   | `number`  | —       | The `em` context, in `px`.               |
| `$important` | `boolean` | `false` | Append `!important`.                     |

::: code-group

```scss [SCSS]
@use "@unsass/em";

.foo {
    @include em.declaration(font-size, 16px, 16px);
    @include em.declaration(margin, 16px 20px, 16px);
    @include em.declaration(border, 1px solid darkcyan, 16px);
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
