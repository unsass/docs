# CSS

A set of Sass mixins to help manage CSS declarations consistently, with built-in support for defining and using custom
properties.

Check the repo here: [https://github.com/unsass/css](https://github.com/unsass/css).

## Install

Add `@unsass/css` as dependencies for the project.

::: code-group
```npm
npm install @unsass/css
```

```yarn
yarn add @unsass/css
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
