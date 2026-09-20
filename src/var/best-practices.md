---
description: "Best practices for @unsass/var: let create() normalize names, always give read helpers a fallback and keep fallbacks meaningful."
---

# Best Practices

Recommendations for using `@unsass/var` effectively.

## Let `create()` normalize the name

`create()` adds the `--` prefix when it is missing, so both forms produce the same result. Pick one convention per
project — without the prefix reads best in a token map — and stay with it.

```scss
var.create("primary-color", darkcyan);   // var(--primary-color, darkcyan)
var.create("--primary-color", darkcyan); // var(--primary-color, darkcyan)
```

## Give the read helpers a fallback

`name()`, `fallback()` and `parse()` split the function on its first comma, so the `var()` must carry a fallback.
Build the value with `create()` and a fallback if you intend to read it back:

```scss
$color: var.create("primary-color", darkcyan);

var.fallback($color); // "darkcyan"
```

## Keep fallbacks meaningful

A fallback is what the browser uses when the custom property is not defined. Use a real default value rather than an
empty placeholder, so a missing token degrades to something sensible instead of an invalid declaration.

## Prefer `parse()` when you need both parts

Each helper parses the function again. When you need the name and the fallback of the same value, call `parse()` once
and read the map:

```scss
@use "sass:map";

$parts: var.parse(var(--primary-color, darkcyan));

map.get($parts, "name");     // "--primary-color"
map.get($parts, "fallback"); // "darkcyan"
```
