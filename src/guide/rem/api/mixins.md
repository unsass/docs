---
outline: deep
---

# Mixins

## `declaration($property, $value, $important)`

Sets declaration with conversion of `px` unit to `rem`, with optional `!important`.

### Single value

The following Sass...

```scss
@use "@unsass/rem";

.foo {
    @include rem.declaration(font-size, 16px);
}
```

...will produce the following CSS...

```css
.foo {
    font-size: 1rem;
}
```

### Multiple values

The following Sass...

```scss
@use "@unsass/rem";

.foo {
    @include rem.declaration(margin, 20px 30px);
}
```

...will produce the following CSS...

```css
.foo {
    margin: 1.25rem 1.875rem;
}
```

### Multiple mixed values

The following Sass...

```scss
@use "@unsass/rem";

.foo {
    @include rem.declaration(border, 1px solid darkcyan);
}
```

...will produce the following CSS...

```css
.foo {
    border: 0.0625rem solid darkcyan;
}
```

###  Comma-separated values

The following Sass...

```scss
@use "@unsass/rem";

.foo {
    @include rem.declaration(box-shadow, 0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75));
}
```

...will produce the following CSS...

```css
.foo {
    box-shadow: 0 0 0.625rem 0.3125rem rgba(0, 139, 139, 0.75), inset 0 0 0.625rem 0.3125rem rgba(0, 139, 139, 0.75);
}
```

## `baseline($important: false)`

Sets declaration with `font-size` property, with optional `!important`.

### Default

The following Sass...

```scss
@use "@unsass/rem";

html,
body {
    @include rem.baseline;
}
```

...will produce the following CSS...

```css
html,
body {
    font-size: 100%;
}
```

### With `!important`

The following Sass...

```scss
@use "@unsass/rem";

html,
body {
    @include rem.baseline(true);
}
```

...will produce the following CSS...

```css
html,
body {
    font-size: 100% !important;
}
```
