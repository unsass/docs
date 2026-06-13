---
description: "Install UnSass packages from npm with npm, yarn or pnpm, import them via the Sass module system, and configure them on use."
---

# Installation

Every UnSass package is published to npm under the `@unsass` scope and installs independently. Add only the ones
you need.

## Install a package

::: code-group

```sh [npm]
npm install @unsass/breakpoint
```

```sh [yarn]
yarn add @unsass/breakpoint
```

```sh [pnpm]
pnpm add @unsass/breakpoint
```

:::

Swap `breakpoint` for any other package: `@unsass/css`, `@unsass/em`, `@unsass/rem`, `@unsass/selector`.

## Use a package

Pull a package in with the Sass module system and call it through its namespace:

```scss
@use "@unsass/breakpoint";

.card {
    @include breakpoint.up("lg") {
        display: grid;
    }
}
```

## Configure on import

Packages that expose configuration accept it through `@use ... with (...)`:

```scss
@use "@unsass/rem" with (
    $baseline: 16px
);

@use "@unsass/breakpoint" with (
    $screens: (
        "lg": 1024px
    )
);
```

See each package's **Configuration** page for the available options.

::: tip Centralize configuration
For a single source of truth, forward configured packages from one file and `@use` that file everywhere. See
[Best Practices](/guide/best-practices).
:::

## Requirements

- A Dart Sass compiler using the module system (`@use` / `@forward`).
- `@unsass/breakpoint` additionally requires Dart Sass **`>= 1.95.0`** (modern `if()` syntax).
