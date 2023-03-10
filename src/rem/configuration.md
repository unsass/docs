# Configuration

This section will help you to configure `@unsass/rem`.

## `$baseline`

Sets baseline reference. Only in `px`. Default `16px`.

```scss
@use "@unsass/rem" with (
    $baseline: 10px
);
```

## `config($baseline)`

The following mixin will configure a global new parameters:

```scss
@use "@unsass/rem";

@include rem.config(10px);
```

::: info Top-level config override

If variables are already configured on top-level using `@use ... with`, by another dependency for example, you can't use
this solution anymore, because the module can only be setup once, this is a Sass restriction with **Module System**, but
another solution exist for override the main configuration, with a mixin!

See [official documentation](https://sass-lang.com/documentation/at-rules/use#with-mixins) about override configuration
with mixins.
:::
