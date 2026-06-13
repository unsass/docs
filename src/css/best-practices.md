---
description: "Best practices for @unsass/css: when to use declaration(), wrapping list values and centralizing custom properties."
---

# Best Practices

Recommendations for using `@unsass/css` effectively.

## Reach for `declaration()` when it adds value

`declaration()` shines when a property needs `!important` toggling, list handling, or custom-property integration.
For a trivial static declaration, plain CSS is perfectly fine — don't wrap everything for its own sake.

```scss
// ✅ Worth it — custom property with fallback
.button {
    @include css.declaration(background, cp.create("accent", darkcyan));
}

// ➖ Unnecessary — a plain declaration is clearer
.button {
    @include css.declaration(display, flex); // just write `display: flex;`
}
```

## Wrap comma-separated values in parentheses

Sass treats a top-level comma as an argument separator. Parenthesize comma-separated CSS lists so they reach the
mixin as a single value:

```scss
// ✅ One value
@include css.declaration(transition, (color 0.2s, transform 0.2s));

// ❌ Parsed as extra arguments
@include css.declaration(transition, color 0.2s, transform 0.2s);
```

## Centralize custom properties

Define your custom properties once, in a single `:root` block, then consume them everywhere by name. It keeps the
token list discoverable and avoids redefining the same variable across files.

```scss
:root {
    @include css.declaration(cp.create("brand", darkcyan));
    @include css.declaration(cp.create("surface", white));
}
```

## Keep selector affixes consistent

Pick one `$separator` convention per project (the default `:` mirrors utility-class ecosystems) and stick to it,
so generated class names stay predictable.
