---
description: "Reference for @unsass/breakpoint functions: get-value, get-next, get-prev and get-screens for reading the configured breakpoint tokens."
---

# Functions

Accessed through the `breakpoint` namespace (`@use "@unsass/breakpoint"`). These helpers read the configured tokens
and back the [mixins](/breakpoint/mixins) — useful when you need a raw value or want to drive your own logic.

## `get-value($token)` <Badge type="tip" text="function" />

Returns the configured width for a token, or `null` when the token is unknown.

| Parameter | Type     | Default | Description                        |
|-----------|----------|---------|------------------------------------|
| `$token`  | `string` | —       | A key from the configured tokens.  |

```scss
breakpoint.get-value("lg"); // 960px
```

## `get-next($value)` <Badge type="tip" text="function" />

Returns the key of the token that follows the given one, or `null` for the last or an unknown token.

| Parameter | Type     | Default | Description       |
|-----------|----------|---------|-------------------|
| `$value`  | `string` | —       | A token key.      |

```scss
breakpoint.get-next("lg"); // "xl"
```

## `get-prev($value)` <Badge type="tip" text="function" />

Returns the key of the token that precedes the given one, or `null` for the first or an unknown token.

| Parameter | Type     | Default | Description       |
|-----------|----------|---------|-------------------|
| `$value`  | `string` | —       | A token key.      |

```scss
breakpoint.get-prev("lg"); // "md"
```

## `get-screens($exclude...)` <Badge type="tip" text="function" />

Returns the full token map, optionally omitting one or more keys.

| Parameter    | Type      | Default | Description              |
|--------------|-----------|---------|--------------------------|
| `$exclude…`  | `arglist` | —       | Token keys to leave out. |

```scss
breakpoint.get-screens();             // the full map
breakpoint.get-screens("xs", "2xl");  // without xs and 2xl
```
