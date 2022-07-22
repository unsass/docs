---
outline: deep
---

# Functions

This section will help you to use `@unsass/breakpoint` functions.

## `get-value($token)`

Get value from the configured tokens list.

```scss
@use "@unsass/breakpoint";

.foo {
    width: breakpoint.get-value(lg);
}
```

```css
.foo {
    width: 960px;
}
```

## `get-screens()`

Get list of screens tokens.

```scss
@use "@unsass/breakpoint";

$screens: breakpoint.get-screens();

// $screens: (
//  "xs": 320px,
//  "sm": 480px,
//  "md": 768px,
//  "lg": 960px,
//  "xl": 1200px,
//  "2xl": 1400px
// )
```
