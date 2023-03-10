# Functions

This section will help you to use `@unsass/rem` functions.

## `convert($values...)`

Easily convert `px` unit to `rem`.

### Single value

```scss
@use "@unsass/rem";

.foo {
    font-size: rem.convert(16px);
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
    margin: rem.convert(20px 30px);
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
    border: rem.convert(1px solid darkcyan);
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
    box-shadow: rem.convert(0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75));
}
```

**Result**

```css
.foo {
    box-shadow: 0 0 0.625rem 0.3125rem rgba(0, 139, 139, 0.75), inset 0 0 0.625rem 0.3125rem rgba(0, 139, 139, 0.75);
}
```
