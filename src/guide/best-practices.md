---
description: "Cross-package best practices for UnSass: namespacing, configuring on import, centralizing configuration and keeping generated CSS lean."
---

# Best Practices

General guidelines that apply across every UnSass package.

## Always namespace

Use `@use` with a namespace rather than `as *`. It keeps call sites explicit about which package a mixin comes
from and avoids name clashes — several packages expose members with the same name (for example both `breakpoint`
and `rem` define a `config` mixin).

```scss
// ✅ Good — explicit namespaces
@use "@unsass/breakpoint";
@use "@unsass/rem";

.card {
    @include breakpoint.up("md") {
        @include rem.declaration(padding, 24px);
    }
}
```

```scss
// ❌ Avoid — global, collision-prone
@use "@unsass/breakpoint" as *;
@use "@unsass/rem" as *;
```

## Configure on import, not through globals

Pass configuration through `@use ... with (...)` instead of defining loose variables. A module can only be
configured this way **once**, at first import.

```scss
// ✅ Good
@use "@unsass/rem" with (
    $baseline: 16px
);
```

```scss
// ❌ Avoid
$baseline: 16px;
@use "@unsass/rem";
```

## Centralize configuration

For a single source of truth, configure every package in one file and `@forward` it. Because several packages share
member names, forward each one under a **prefix** to keep the merged namespace unambiguous.

```scss
// styles/_config.scss
@forward "@unsass/breakpoint" as breakpoint-* with (
    $screens: (
        "sm": 640px,
        "md": 768px,
        "lg": 1024px
    )
);

@forward "@unsass/rem" as rem-* with (
    $baseline: 16px
);
```

Then consume that single module everywhere:

```scss
// components/_button.scss
@use "../styles/config";

.button {
    @include config.breakpoint-up("md") {
        padding: config.rem-convert(16px);
    }
}
```

## Let validation work for you

UnSass mixins `@error` on invalid input (unknown breakpoint tokens, wrong units, non-class selectors…). Treat a
failing build as the tool catching a real mistake — prefer fixing the call over working around the check.

## Keep generated CSS lean

Group rules that share a media query or selector affix so the compiler emits fewer duplicated blocks:

```scss
// ✅ One @media block
.button,
.card {
    @include breakpoint.up("md") {
        padding: 1rem;
    }
}
```
