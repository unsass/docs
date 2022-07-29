---
outline: deep
---

# Functions

## `convert($values...)`

Easily convert `px` unit to `rem`.

### Single value

The following Sass...

```scss
@use "@unsass/rem";

.foo {
    font-size: rem.convert(16px);
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
    margin: rem.convert(20px 30px);
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
    border: rem.convert(1px solid darkcyan);
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
    box-shadow: rem.convert(0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75));
}
```

...will produce the following CSS...

```css
.foo {
    box-shadow: 0 0 0.625rem 0.3125rem rgba(0, 139, 139, 0.75), inset 0 0 0.625rem 0.3125rem rgba(0, 139, 139, 0.75);
}
```
