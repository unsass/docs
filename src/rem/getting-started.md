# Rem

Provides a consistent way to manage CSS rem across your project.

Check the repo here: [https://github.com/unsass/rem](https://github.com/unsass/rem).

## Install

Add `@unsass/rem` as dependencies for the project.

::: code-group
```npm
npm install @unsass/rem
```

```yarn
yarn add @unsass/rem
```
:::

## Basic usage

Use `@unsass/rem` inside the project.

::: code-group
```scss
@use "@unsass/rem";

.foo {
    font-size: rem.convert(16px);
}
```

```css
.foo {
    font-size: 1rem;
}
```
:::
