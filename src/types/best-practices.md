---
description: "Best practices for @unsass/types: validate input with @error, know how lists, maps and strings are detected, and prefer null checks over falsy tests."
---

# Best Practices

Recommendations for using `@unsass/types` effectively.

## Validate input, then fail loudly

Check the arguments of your own functions and mixins, and raise an explicit `@error` — the same approach as the rest
of the UnSass suite. A clear message at compile time beats a silently wrong CSS value.

```scss
@use "sass:meta";
@use "@unsass/types";

@function double($value) {
    @if not types.is-number($value) {
        @error "Expected a number, got `#{meta.inspect($value)}`.";
    }

    @return $value * 2;
}
```

## Mind the Sass list rules

A single value is **not** a list for `is-list()`, and an empty list is not a map for `is-map()`. Both are direct
consequences of how Sass reports types. Normalize the value first when a function should accept a single item or a
list:

```scss
@if not types.is-list($values) {
    $values: ($values,);
}
```

## Quoted colors are strings

`"#008b8b"` is a string, `#008b8b` is a color. Use `is-color()` for the latter and `is-string()` for the former —
do not expect one to match both.

## Prefer `is-null()` to a falsy test

In Sass, both `null` and `false` are falsy. When `false` is a meaningful value, test explicitly:

```scss
@if types.is-null($value) {
    // value not provided
} @else if types.is-boolean($value) {
    // true or false
}
```
