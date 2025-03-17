# API: declaration

The mixin `declaration()` help to easily manage CSS declaration.

## Parameters

The mixin has many options and is written like this: `declaration($property, $value, $important)`.

| Parameter    | Description              | Default     |
|--------------|--------------------------|-------------|
| `$property`  | The CSS property.        | `undefined` |
| `$value`     | The property value.      | `null`      |
| `$important` | Enable the `!important`. | `false`     |

## Usage

#### Classic

::: code-group
```scss
@use "@unsass/css";

.foo {
    @include css.declaration(color, darkcyan);
    @include css.declaration(box-shadow, (0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75))); // Use parentheses for declare comma-separated values list.
}
```

```css
.foo {
    color: darkcyan;
    box-shadow: 0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75);
}
```
:::

#### Option `!important`

::: code-group
```scss
@use "@unsass/css";

.foo {
    @include css.declaration(color, darkcyan, true);
}
```

```css
.foo {
    color: darkcyan !important;
}
```
:::
