# Configuration

This section will help you to configure `@unsass/breakpoint`.

## `$screens`

**Override default token...**

```scss
@use "@unsass/breakpoint" with (
    $screens: (
        "lg": 1024px
    )
);
```

**...or define new one.**

```scss
@use "@unsass/breakpoint" with (
    $screens: (
        "3xl": 1920px
    )
);
```

## `$reset`

Erase the default `$screens` config for helping you on a fresh start with your own custom tokens.

```scss
@use "@unsass/breakpoint" with (
    $reset: true,
    $screens: (
        "tablet": 768px,
        "desktop": 960px
    )
);
```

## `config($screens, $reset)`

The following mixin will configure a global new parameters:

```scss
@use "@unsass/breakpoint";

// Extend the default list...
@include breakpoint.config((
    "3xl": 1980px
));

// ... or reset for fresh start.
@include breakpoint.config((
    "tablet": 768px,
    "desktop": 960px
), true);
```

::: info Top-level config override

If variables are already configured on top-level using `@use ... with`, by another dependency for example, you can't use
this solution anymore, because the module can only be setup once, this is a Sass restriction with **Module System**, but
another solution exist for override the main configuration, with a mixin!

See [official documentation](https://sass-lang.com/documentation/at-rules/use#with-mixins) about override configuration
with mixins.
:::
