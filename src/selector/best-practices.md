---
description: "Best practices for @unsass/selector: target classes, avoid mixing suffix with pseudo selectors and keep one separator convention."
---

# Best Practices

Recommendations for using `@unsass/selector` effectively.

## Target classes only

`create()` builds class selectors. Pass a class name (with or without the leading dot) — element or id selectors are
not the tool's job.

```scss
// ✅
@include selector.create("foo") { /* ... */ }
@include selector.create(".foo") { /* ... */ }
```

## Don't mix suffix with pseudo selectors

A suffix and a pseudo-class/element express different intents and are mutually exclusive — the mixin errors if you
combine them. Pick one per call:

```scss
// ✅ Suffix
@include selector.create("foo", "md", $suffix: true) { /* .foo\:md */ }

// ✅ Pseudo-class
@include selector.create("foo", $pseudo-class: "hover") { /* .foo:hover */ }

// ❌ Both — compile-time error
@include selector.create("foo", "md", $suffix: true, $pseudo-class: "hover");
```

## Keep one separator convention

The default `:` mirrors common utility-class ecosystems. Choose one separator for the whole project so generated
class names stay predictable and easy to escape in markup.

## Use `$root` to escape nesting

When you need the generated selector at the top level regardless of where the mixin is called, pass `$root: true`
to emit it with `@at-root` instead of nesting it under the current selector.
