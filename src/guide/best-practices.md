# Best Practices

General guidelines and recommendations for using UnSass effectively across all packages.

## Use Namespaces

Always use the `@use` rule with namespaces to avoid conflicts:

```scss
// ✅ Good
@use "@unsass/breakpoint";
@use "@unsass/css";

.component {
  @include breakpoint.up(md) {
    @include css.declaration(color, primary);
  }
}

// ❌ Avoid
@use "@unsass/breakpoint" as *;
@use "@unsass/css" as *;
```

## Configure at Import

Configure packages when importing rather than using global variables:

```scss
// ✅ Good
@use "@unsass/breakpoint" with (
  $screens: (sm: 640px, md: 768px)
);

// ❌ Avoid
$breakpoint-values: (sm: 640px, md: 768px);
@use "@unsass/breakpoint";
```

## Keep Configuration Centralized

Create a central configuration file:

```scss
// styles/_config.scss
@forward "@unsass/breakpoint" with (
  $screens: (sm: 640px, md: 768px, lg: 1024px)
);

@forward "@unsass/rem" with (
  $base-size: 16px
);
```

Then use it throughout your project:

```scss
// components/button.scss
@use "../config";

.button {
  @include config.breakpoint-up(md) {
    padding: config.rem(16px);
  }
}
```
