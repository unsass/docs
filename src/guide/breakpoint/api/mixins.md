---
outline: deep
---

# Mixins

This section will help you to use `@unsass/breakpoint` mixins.

## `up($token)`

Sets media rule for minimum width only.

```scss
@use "@unsass/breakpoint";

.foo {
    @include breakpoint.up(lg) {
        color: darkcyan;
    }
}
```

```css
@media (min-width: 960px) {
    .foo {
        color: darkcyan;
    }
}
```

## `down($token)`

Sets media rule for maximum width only.

```scss
@use "@unsass/breakpoint";

.foo {
    @include breakpoint.down(lg) {
        color: darkcyan;
    }
}
```

```css
@media (max-width: 959px) {
    .foo {
        color: darkcyan;
    }
}
```

## `only($token)`

Sets media rule for between minimum and maximum widths, but the maximum will be automatically set with next value
of `$token`.

```scss
@use "@unsass/breakpoint";

.foo {
    @include breakpoint.only(lg) {
        color: darkcyan;
    }
}
```

```css
@media (min-width: 960px) and (max-width: 1199px) {
    .foo {
        color: darkcyan;
    }
}
```

## `between($token)`

Sets media rule for between minimum and maximum widths.

```scss
@use "@unsass/breakpoint";

.foo {
    @include breakpoint.between(md, xl) {
        color: darkcyan;
    }
}
```

```css
@media (min-width: 768px) and (max-width: 1199px) {
    .foo {
        color: darkcyan;
    }
}
```
