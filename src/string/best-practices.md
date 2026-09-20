---
description: "Best practices for @unsass/string: replace safely, trim one occurrence at a time, skip optional parts with combine() and reuse built-ins."
---

# Best Practices

Recommendations for using `@unsass/string` effectively.

## Reuse the Sass built-ins

The module forwards `sass:string`, so `string.length()`, `string.slice()`, `string.index()` or
`string.to-upper-case()` sit next to the UnSass helpers. You don't need a separate `@use "sass:string"`.

```scss
@use "@unsass/string";

string.to-upper-case("foo");         // "FOO"
string.replace("foo bar", " ", "-"); // "foo-bar"
```

## Never pass an empty query to `replace()`

`replace()` walks the string looking for `$query`. An empty query matches everywhere and never advances, so the call
fails. Guard the value when it comes from a variable.

## Remember that `trim` removes one occurrence

`trim-start()`, `trim-end()` and `trim()` strip a single occurrence of the target, not every repetition. That is what
you want for a prefix like `--` or a wrapper like `var(` … `)`, but not for collapsing runs of spaces.

```scss
string.trim("  foo  "); // " foo " — one space on each side
```

## Let `combine()` skip optional parts

`combine()` ignores `null` and `false`, so you can build names from optional modifiers without any `@if`:

```scss
$name: string.combine("card", $variant, $state); // "card" when both are null
```

## Keep `to-number()` for plain digits

`to-number()` only understands the characters `"0"` to `"9"`. For anything else (signs, decimals, units), parse the
value yourself before converting.
