---
description: "Reference for @unsass/var functions: create, create-name, name, fallback and parse for building and reading var() CSS functions."
---

# Functions

Accessed through the `var` namespace (`@use "@unsass/var"`).

## `create($name, $fallback)`

Creates a `var()` CSS function. The `--` prefix is added to the name when it is missing, and the fallback is optional.

| Parameter   | Type     | Default | Description                                      |
|-------------|----------|---------|--------------------------------------------------|
| `$name`     | `string` | —       | The variable name, with or without the `--`.     |
| `$fallback` | `any`    | `null`  | The fallback value. Omit it to emit no fallback. |

::: code-group

```scss [SCSS]
@use "@unsass/var";

.foo {
    color: var.create("primary-color", darkcyan);
    background: var.create("--surface");
}
```

```css [CSS]
.foo {
    color: var(--primary-color, darkcyan);
    background: var(--surface);
}
```

:::

## `create-name($name)`

Returns a custom property name, prefixed with `--` when the prefix is missing.

| Parameter | Type     | Default | Description                                  |
|-----------|----------|---------|----------------------------------------------|
| `$name`   | `string` | —       | The variable name, with or without the `--`. |

```scss
var.create-name("primary-color");   // "--primary-color"
var.create-name("--primary-color"); // "--primary-color"
```

## `name($var)`

Returns the name of a `var()` function.

| Parameter | Type     | Default | Description                             |
|-----------|----------|---------|-----------------------------------------|
| `$var`    | `string` | —       | A `var()` function that has a fallback. |

```scss
var.name(var(--primary-color, darkcyan)); // "--primary-color"
```

## `fallback($var)`

Returns the fallback of a `var()` function.

| Parameter | Type     | Default | Description                             |
|-----------|----------|---------|-----------------------------------------|
| `$var`    | `string` | —       | A `var()` function that has a fallback. |

```scss
var.fallback(var(--primary-color, darkcyan)); // "darkcyan"
```

## `parse($var)`

Returns a map with the `name` and `fallback` keys of a `var()` function.

| Parameter | Type     | Default | Description                             |
|-----------|----------|---------|-----------------------------------------|
| `$var`    | `string` | —       | A `var()` function that has a fallback. |

```scss
var.parse(var(--primary-color, darkcyan));
// ("name": "--primary-color", "fallback": "darkcyan")
```

::: warning
`name()`, `fallback()` and `parse()` expect a `var()` function **with a fallback**. Calling them on `var(--primary-color)`
fails with a Sass error.
:::
