---
description: "Best practices for @unsass/em: choosing the right context, keeping it consistent and when to prefer rem instead."
---

# Best Practices

Recommendations for using `@unsass/em` effectively.

## Match the context to the element's font size

`em` resolves against the element's own font size (for most properties) or the parent's (for `font-size` itself).
Pass the context that reflects where the value will apply, otherwise the maths is correct but the result is wrong in
the browser.

```scss
// Element rendered at 20px — size its padding relative to that.
.lead {
    font-size: 20px;
    @include em.declaration(padding, 10px, 20px); // 0.5em
}
```

## Keep the context explicit and consistent

Unlike `rem`, `em` has no global baseline — the context lives at every call site. Store it in a variable when a
component shares one context, so it stays in sync:

```scss
$context: 18px;

.card {
    font-size: $context;
    @include em.declaration(padding, 12px, $context);
    @include em.declaration(gap, 8px, $context);
}
```

## Reach for `rem` when you want a fixed reference

If a value should scale from the document root rather than the local font size, [`@unsass/rem`](/rem/getting-started)
is the better fit — it converts against one configurable baseline instead of a per-call context.

## Don't convert what shouldn't scale

Leave hairline borders, `0`, and non-length values as-is — `convert()` already passes keywords, colors and `0`
through untouched, so there's no need to route them through it.
