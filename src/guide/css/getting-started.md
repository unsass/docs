# Getting Started

This documentation will help you to basically used `@unsass/css` inside your project.

## Installing

Add `@unsass/css` as dependencies for the project.

::: code-group
```shell
npm install @unsass/css
```
:::

## Basic usage

Use `@unsass/css` inside the project.

::: code-group
```scss
@use "@unsass/css";

.foo {
    @include css.declaration(color, darkcyan);
}
```

```css
.foo {
    color: darkcyan;
}
```
:::
