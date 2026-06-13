---
description: "Best practices for @unsass/rem: keep a 16px baseline, convert larger values and leave hairlines in pixels."
---

# Best Practices

Recommendations for using `@unsass/rem` effectively.

## Stick to a 16px baseline

`16px` is the browser default and respects the user's font-size preference. Resetting the baseline to `10px` makes
the maths tidier but quietly overrides accessibility settings — avoid it unless you have a specific reason.

```scss
// ✅ Good
@use "@unsass/rem" with ($baseline: 16px);
```

```scss
// ❌ Avoid
@use "@unsass/rem" with ($baseline: 10px);
```

## Pair the baseline with `baseline()`

Apply the `baseline()` mixin at the root so the document `font-size` matches the configured reference:

```scss
html {
    @include rem.baseline; // font-size: 100%;
}
```

## Keep tiny, fixed details in pixels

Hairline borders and very small offsets read awkwardly as `rem` and gain nothing from scaling:

```scss
.component {
    border: 1px solid black;           // keep in px
    border-radius: rem.convert(8px);   // convert larger values
    padding: rem.convert(16px);
}
```

## Convert once, reuse

Store repeated conversions in a variable instead of recomputing them at every call site:

```scss
$gap: rem.convert(24px);

.stack { gap: $gap; }
.grid  { gap: $gap; }
```

## Don't convert unitless or non-length values

Leave `opacity`, `z-index`, `flex`, percentages and viewport units in their own units — only pixel lengths benefit
from `rem` conversion.
