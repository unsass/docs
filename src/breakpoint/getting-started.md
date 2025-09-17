# Breakpoint

Provides a consistent way to manage CSS breakpoints across your project, ensuring responsive styles are applied
reliably.

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
