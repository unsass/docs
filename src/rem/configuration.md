# Configuration

This section will help you to right configure the module for your project.

## `$baseline`

Sets baseline reference. Only in `px`. Default is `16px`.

```scss
@use "@unsass/rem" with (
    $baseline: 10px
);
```

## `config($baseline)`

The following Sass will configure new parameters:

```scss
@use "@unsass/rem";

@include rem.config(10px);
```

::: info
If variables are already configured on top-level using `@use ... with`, by another dependency, for example, you can't
use this solution anymore. This is because the module can only be set up once, this is a Sass restriction with **Module
System**, but another solution exists for override the main configuration, with a mixin!

See [official documentation](https://sass-lang.com/documentation/at-rules/use#with-mixins) about override configuration
with mixins.
:::
