# Mixins <Badge type="tip" text="API"/>

This section provides comprehensive guidance on how to effectively use breakpoint mixins for managing responsive CSS
and maintaining consistency throughout your project.

## `up($token)`

Applies a media query rule for minimum width only, focusing on devices with screen sizes equal to or larger than the
specified breakpoint.

::: code-group
```scss
@use "@unsass/breakpoint";

.foo {
    @include breakpoint.up("lg") {
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
:::

## `down($token)`

Applies a media query rule for maximum width only, focusing on devices with screen sizes smaller than the specified
breakpoint.

::: code-group
```scss
@use "@unsass/breakpoint";

.foo {
    @include breakpoint.down("lg") {
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
:::

## `only($token)`

Applies a media query rule for a specific breakpoint range, automatically setting the minimum width to the specified
token and the maximum width to just before the next breakpoint value.

::: code-group
```scss
@use "@unsass/breakpoint";

.foo {
    @include breakpoint.only("lg") {
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
:::

## `between($token)`

Applies a media query rule for a custom range between two specified breakpoints, allowing precise control over the
minimum and maximum widths.

::: code-group
```scss
@use "@unsass/breakpoint";

.foo {
    @include breakpoint.between("md", "xl") {
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
:::
