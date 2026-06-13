---
description: "Reference for @unsass/css mixins: declaration() for CSS declarations and selector() for affixed class selectors."
---

# Mixins

Accessed through the `css` namespace (`@use "@unsass/css"`).

## `declaration($property, $value, $important)` <Badge type="tip" text="mixin" />

Emits a CSS declaration. Accepts single values, space-separated lists, and comma-separated lists (wrapped in
parentheses). Also integrates with [custom properties](/css/configuration).

| Parameter    | Type      | Default | Description                          |
|--------------|-----------|---------|--------------------------------------|
| `$property`  | `string`  | —       | The CSS property.                    |
| `$value`     | `any`     | `null`  | The value (or custom-property ref).  |
| `$important` | `boolean` | `false` | Append `!important`.                 |

::: code-group

```scss [SCSS]
@use "@unsass/css";

.foo {
    @include css.declaration(color, darkcyan);
    // Wrap comma-separated lists in parentheses.
    @include css.declaration(box-shadow, (0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75)));
}
```

```css [CSS]
.foo {
    color: darkcyan;
    box-shadow: 0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75);
}
```

:::

### `!important`

::: code-group

```scss [SCSS]
@use "@unsass/css";

.foo {
    @include css.declaration(color, darkcyan, true);
}
```

```css [CSS]
.foo {
    color: darkcyan !important;
}
```

:::

## `selector($key, $separator, $suffix, $selector)` <Badge type="tip" text="mixin" />

Generates a class selector affixed with a key — useful for responsive or state variants. The target must be a class
selector.

| Parameter    | Type      | Default | Description                                   |
|--------------|-----------|---------|-----------------------------------------------|
| `$key`       | `string`  | —       | The affix key, e.g. `"md"`.                   |
| `$separator` | `string`  | `":"`   | Character placed between key and selector.    |
| `$suffix`    | `boolean` | `false` | Append the key instead of prefixing it.       |
| `$selector`  | `string`  | `&`     | Target selector (defaults to the parent).     |

::: code-group

```scss [SCSS]
@use "@unsass/css";

.foo {
    color: darkorange;

    @include css.selector("md") {
        color: darkcyan;
    }
}
```

```css [CSS]
.foo {
    color: darkorange;
}

.md\:foo {
    color: darkcyan;
}
```

:::

### Custom separator

::: code-group

```scss [SCSS]
@use "@unsass/css";

.foo {
    @include css.selector("md", "@") {
        color: darkcyan;
    }
}
```

```css [CSS]
.md\@foo {
    color: darkcyan;
}
```

:::

### Suffix

::: code-group

```scss [SCSS]
@use "@unsass/css";

.foo {
    @include css.selector("md", $suffix: true) {
        color: darkcyan;
    }
}
```

```css [CSS]
.foo\:md {
    color: darkcyan;
}
```

:::

### Custom target selector

::: code-group

```scss [SCSS]
@use "@unsass/css";

@include css.selector("md", $selector: ".foo") {
    color: darkcyan;
}
```

```css [CSS]
.md\:foo {
    color: darkcyan;
}
```

:::
