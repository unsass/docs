---
description: "Reference for @unsass/css custom-properties functions: create, get-varname, get-fallback, is-custom-prop and create-var."
---

# Functions

Accessed through the `cp` namespace (`@use "@unsass/css/custom-properties" as cp`). These helpers build and read
custom-property references, and back the `declaration()` [mixin](/css/mixins). See
[Custom Properties](/css/configuration) for how to define and consume them.

## `cp.create($name, $fallback)`

Builds a custom-property reference. A leading `--` is added automatically if you omit it.

| Parameter   | Type     | Default | Description                                         |
|-------------|----------|---------|-----------------------------------------------------|
| `$name`     | `string` | —       | The variable name, with or without `--`.            |
| `$fallback` | `any`    | `null`  | Optional fallback value (may be another reference). |

## `cp.get-varname($custom-prop)`

Returns the custom property name, including the leading `--`.

| Parameter      | Type  | Default | Description                         |
|----------------|-------|---------|-------------------------------------|
| `$custom-prop` | `map` | —       | A reference built by `cp.create()`. |

```scss
cp.get-varname(cp.create("brand", darkcyan)); // --brand
```

## `cp.get-fallback($custom-prop)`

Returns the fallback of a reference, or `null` when none was set.

| Parameter      | Type  | Default | Description                         |
|----------------|-------|---------|-------------------------------------|
| `$custom-prop` | `map` | —       | A reference built by `cp.create()`. |

```scss
cp.get-fallback(cp.create("brand", darkcyan)); // darkcyan
cp.get-fallback(cp.create("brand"));           // null
```

## `cp.is-custom-prop($value)`

Returns `true` when the value is a reference built by `cp.create()`.

| Parameter | Type  | Default | Description        |
|-----------|-------|---------|--------------------|
| `$value`  | `any` | —       | The value to test. |

```scss
cp.is-custom-prop(cp.create("brand")); // true
cp.is-custom-prop(16px);               // false
```

## `cp.create-var($custom-prop)`

Resolves a reference into a `var()` expression, chaining nested fallbacks. This is what `declaration()` calls when a
reference is passed as the value.

| Parameter      | Type  | Default | Description                         |
|----------------|-------|---------|-------------------------------------|
| `$custom-prop` | `map` | —       | A reference built by `cp.create()`. |

```scss
cp.create-var(cp.create("brand", darkcyan)); // var(--brand, darkcyan)
```
