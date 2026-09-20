---
description: "Reference for @unsass/types functions: is-number, is-string, is-color, is-list, is-map, is-boolean and is-null."
---

# Functions

Accessed through the `types` namespace (`@use "@unsass/types"`). Every function takes a single `$value` and returns a
boolean.

## `is-number($value)` <Badge type="tip" text="function" />

Checks whether a value is a number, with or without a unit.

| Parameter | Type  | Default | Description        |
|-----------|-------|---------|--------------------|
| `$value`  | `any` | —       | The value to test. |

```scss
types.is-number(12);   // true
types.is-number(12px); // true
types.is-number("12"); // false
```

## `is-string($value)` <Badge type="tip" text="function" />

Checks whether a value is a string, quoted or not.

| Parameter | Type  | Default | Description        |
|-----------|-------|---------|--------------------|
| `$value`  | `any` | —       | The value to test. |

```scss
types.is-string("foo"); // true
types.is-string(foo);   // true
types.is-string(1);     // false
```

## `is-color($value)` <Badge type="tip" text="function" />

Checks whether a value is a color. A quoted color is a string, not a color.

| Parameter | Type  | Default | Description        |
|-----------|-------|---------|--------------------|
| `$value`  | `any` | —       | The value to test. |

```scss
types.is-color(darkcyan);  // true
types.is-color(#008b8b);   // true
types.is-color("#008b8b"); // false
```

## `is-list($value)` <Badge type="tip" text="function" />

Checks whether a value is a list. A single value is not a list, and neither is a map.

| Parameter | Type  | Default | Description        |
|-----------|-------|---------|--------------------|
| `$value`  | `any` | —       | The value to test. |

```scss
types.is-list((1px, 2px, 3px)); // true
types.is-list(1px 2px);         // true
types.is-list(());              // true
types.is-list(("foo"));         // false
```

## `is-map($value)` <Badge type="tip" text="function" />

Checks whether a value is a map. An empty list is not a map.

| Parameter | Type  | Default | Description        |
|-----------|-------|---------|--------------------|
| `$value`  | `any` | —       | The value to test. |

```scss
types.is-map(("foo": "bar")); // true
types.is-map(());             // false
```

## `is-boolean($value)` <Badge type="tip" text="function" />

Checks whether a value is `true` or `false`.

| Parameter | Type  | Default | Description        |
|-----------|-------|---------|--------------------|
| `$value`  | `any` | —       | The value to test. |

```scss
types.is-boolean(false);  // true
types.is-boolean("true"); // false
types.is-boolean(null);   // false
```

## `is-null($value)` <Badge type="tip" text="function" />

Checks whether a value is `null`. `false` and empty strings are not `null`.

| Parameter | Type  | Default | Description        |
|-----------|-------|---------|--------------------|
| `$value`  | `any` | —       | The value to test. |

```scss
types.is-null(null);  // true
types.is-null(false); // false
types.is-null("");    // false
```
