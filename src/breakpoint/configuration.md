---
description: "Configure @unsass/breakpoint: override or extend breakpoint tokens with $screens, $reset and the config() mixin."
---

# Configuration

Breakpoint ships with a default set of tokens that you can override, extend, or replace entirely.

## `$screens`

A map of token names to widths. Values provided here are **merged** over the defaults, so you can override an
existing token or add a new one.

::: code-group

```scss [Override]
@use "@unsass/breakpoint" with (
    $screens: (
        "lg": 1024px
    )
);
```

```scss [Add a token]
@use "@unsass/breakpoint" with (
    $screens: (
        "3xl": 1920px
    )
);
```

:::

### Default tokens

| Key   | Value    | Typical target                                       |
|-------|----------|------------------------------------------------------|
| `xs`  | `320px`  | Extra small screen.                                  |
| `sm`  | `480px`  | Standard mobile screen.                              |
| `md`  | `768px`  | Mobile landscape or tablet portrait.                 |
| `lg`  | `960px`  | Desktop or tablet landscape.                         |
| `xl`  | `1200px` | Large desktop screen.                                |
| `2xl` | `1400px` | Extra large desktop screen.                          |

## `$reset`

Set to `true` to discard the default tokens entirely and start from a clean slate with your own `$screens`.

```scss
@use "@unsass/breakpoint" with (
    $reset: true,
    $screens: (
        "tablet": 768px,
        "desktop": 960px
    )
);
```

## Runtime configuration with `config()`

When `@use ... with` is not available — for instance because another dependency already configured the module at
the top level — adjust the tokens at runtime with the `config()` mixin instead.

```scss
@use "@unsass/breakpoint";

// Merge new tokens over the current ones.
@include breakpoint.config((
    "3xl": 1920px
));

// Or replace them entirely.
@include breakpoint.config((
    "tablet": 768px,
    "desktop": 960px
), $reset: true);
```

::: tip
A module can only be set up **once** with `@use ... with`, a constraint of the Sass module system. The `config()`
mixin is the supported escape hatch. See the [official documentation](https://sass-lang.com/documentation/at-rules/use#with-mixins)
on overriding configuration with mixins.
:::
