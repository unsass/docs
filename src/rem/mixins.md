# Mixins

This section will help you to use `@unsass/rem` mixins.

## `declaration($property, $value, $important)`

Sets declaration with conversion of `px` unit to `rem`, with optional `!important`.

### Single value

```scss
@use "@unsass/rem";

.foo {
    @include rem.declaration(font-size, 16px);
}
```

**Result**

```css
.foo {
    font-size: 1rem;
}
```

### Multiple values

```scss
@use "@unsass/rem";

.foo {
    @include rem.declaration(margin, 20px 30px);
}
```

**Result**

```css
.foo {
    margin: 1.25rem 1.875rem;
}
```

### Multiple mixed values

```scss
@use "@unsass/rem";

.foo {
    @include rem.declaration(border, 1px solid darkcyan);
}
```

**Result**

```css
.foo {
    border: 0.0625rem solid darkcyan;
}
```

###  Comma-separated values

```scss
@use "@unsass/rem";

.foo {
    @include rem.declaration(box-shadow, 0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75));
}
```

**Result**

```css
.foo {
    box-shadow: 0 0 0.625rem 0.3125rem rgba(0, 139, 139, 0.75), inset 0 0 0.625rem 0.3125rem rgba(0, 139, 139, 0.75);
}
```

## `baseline($important)`

Sets declaration with `font-size` property, with optional `!important`.

### Default

```scss
@use "@unsass/rem";

html,
body {
    @include rem.baseline;
}
```

**Result**

```css
html,
body {
    font-size: 100%;
}
```

### With `!important`

```scss
@use "@unsass/rem";

html,
body {
    @include rem.baseline(true);
}
```

**Result**

```css
html,
body {
    font-size: 100% !important;
}
```
