---
description: "Best practices for @unsass/breakpoint: mobile-first usage, semantic token names, shallow nesting and lean media queries."
---

# Best Practices

Recommendations for using `@unsass/breakpoint` effectively.

## Prefer a mobile-first approach

Author base styles for the smallest screen, then layer larger breakpoints with `up()`:

```scss
// ✅ Mobile first
.component {
    width: 100%;

    @include breakpoint.up("md") {
        width: 50%;
    }

    @include breakpoint.up("lg") {
        width: 33.333%;
    }
}
```

```scss
// ❌ Desktop first — harder to follow
.component {
    width: 33.333%;

    @include breakpoint.down("lg") {
        width: 50%;
    }

    @include breakpoint.down("md") {
        width: 100%;
    }
}
```

## Use semantic token names

When defining custom tokens, name them by intent so call sites stay readable:

```scss
// ✅ Clear
@use "@unsass/breakpoint" with (
    $screens: (
        "mobile": 375px,
        "tablet": 768px,
        "desktop": 1024px,
        "wide": 1440px
    )
);
```

```scss
// ❌ Ambiguous
@use "@unsass/breakpoint" with (
    $screens: (
        "tiny": 375px,
        "small": 768px,
        "big": 1024px
    )
);
```

## Keep nesting shallow

Avoid stacking breakpoint mixins or burying them under deep selector chains — it makes the cascade hard to predict:

```scss
// ✅ Direct and clear
.card {
    @include breakpoint.up("md") {
        font-size: 16px;
    }
}
```

```scss
// ❌ Too nested
.page .container .card {
    @include breakpoint.between("sm", "md") {
        // ...
    }
}
```

## Group shared queries

Share a single media query between rules instead of repeating it, so the compiled CSS stays lean:

```scss
// ✅ One @media block
.button,
.card {
    @include breakpoint.up("md") {
        padding: 1rem;
    }
}
```

::: info
Build tools such as PostCSS can merge duplicate media queries, but grouping at the source keeps intent obvious.
:::
