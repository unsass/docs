# Breakpoint

Breakpoint is a small, dependency-free Sass toolkit for managing responsive breakpoints. Define named breakpoints
centrally and apply them with concise, composable mixins and helpers so media-query logic stays readable and consistent.

Designed for predictable, testable responsive behavior: supports named breakpoints, logical operators (min/max/between),
and composition of queries so you can reuse breakpoint semantics across your stylesheets without duplicating values.

Check the repo here: [https://github.com/unsass/breakpoint](https://github.com/unsass/breakpoint).

## Install

Add `@unsass/breakpoint` as dependencies for the project.

::: code-group

```npm
npm install @unsass/breakpoint
```

```yarn
yarn add @unsass/breakpoint
```

:::

## Basic usage

Use `@unsass/breakpoint` inside the project.

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
