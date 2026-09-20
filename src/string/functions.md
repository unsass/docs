---
description: "Reference for @unsass/string functions: replace, to-number, from-number, starts-with, ends-with, trim-start, trim-end, trim and combine."
---

# Functions

Accessed through the `string` namespace (`@use "@unsass/string"`). Every function is a pure helper that returns a new
value and never mutates its input.

## `replace($string, $query, $replace)`

Replaces **every** occurrence of a substring. Omit `$replace` to remove the substring.

| Parameter  | Type     | Default | Description                     |
|------------|----------|---------|---------------------------------|
| `$string`  | `string` | —       | The string to search in.        |
| `$query`   | `string` | —       | The substring to replace.       |
| `$replace` | `string` | `""`    | The replacement for each match. |

```scss
string.replace("foo bar baz", " ", "-"); // "foo-bar-baz"
string.replace("foo-bar-baz", "-");      // "foobarbaz"
```

## `to-number($value)`

Converts a string of digits to a number.

| Parameter | Type     | Default | Description                                    |
|-----------|----------|---------|------------------------------------------------|
| `$value`  | `string` | —       | A string made of digits only (`"0"` to `"9"`). |

```scss
string.to-number("42"); // 42
```

::: warning
Only digits are supported. A sign, a decimal point or a unit (`"-1"`, `"1.5"`, `"10px"`) makes the function fail with
a Sass error.
:::

## `from-number($value)`

Converts a number to a string. A unit, if any, is kept.

| Parameter | Type     | Default | Description            |
|-----------|----------|---------|------------------------|
| `$value`  | `number` | —       | The number to convert. |

```scss
string.from-number(10);   // "10"
string.from-number(10px); // "10px"
```

## `starts-with($string, $substring)`

Checks whether a string starts with a substring.

| Parameter    | Type     | Default | Description          |
|--------------|----------|---------|----------------------|
| `$string`    | `string` | —       | The string to test.  |
| `$substring` | `string` | —       | The expected prefix. |

```scss
string.starts-with("button-label", "button"); // true
string.starts-with("button-label", "btn");    // false
```

## `ends-with($string, $substring)`

Checks whether a string ends with a substring.

| Parameter    | Type     | Default | Description          |
|--------------|----------|---------|----------------------|
| `$string`    | `string` | —       | The string to test.  |
| `$substring` | `string` | —       | The expected suffix. |

```scss
string.ends-with("button-label", "label");  // true
string.ends-with("button-label", "button"); // false
```

## `trim-start($string, $target)`

Removes **one** leading occurrence of a target.

| Parameter | Type     | Default | Description                  |
|-----------|----------|---------|------------------------------|
| `$string` | `string` | —       | The string to trim.          |
| `$target` | `string` | `" "`   | The leading value to remove. |

```scss
string.trim-start("--primary-color", "--"); // "primary-color"
string.trim-start("  foo");                 // " foo" (one space removed)
```

## `trim-end($string, $target)`

Removes **one** trailing occurrence of a target.

| Parameter | Type     | Default | Description                   |
|-----------|----------|---------|-------------------------------|
| `$string` | `string` | —       | The string to trim.           |
| `$target` | `string` | `" "`   | The trailing value to remove. |

```scss
string.trim-end("primary-color--", "--"); // "primary-color"
string.trim-end("foo  ");                 // "foo " (one space removed)
```

## `trim($string, $start, $end)`

Removes one leading and one trailing occurrence. `$end` defaults to `$start`.

| Parameter | Type     | Default  | Description                   |
|-----------|----------|----------|-------------------------------|
| `$string` | `string` | —        | The string to trim.           |
| `$start`  | `string` | `" "`    | The leading value to remove.  |
| `$end`    | `string` | `$start` | The trailing value to remove. |

```scss
string.trim(" foo ");                             // "foo"
string.trim("var(--primary-color)", "var(", ")"); // "--primary-color"
```

## `combine($values...)`

Joins strings with a dash. Falsy values (`null`, `false`) are skipped, so optional parts can be passed as they are.

| Parameter  | Type      | Default | Description          |
|------------|-----------|---------|----------------------|
| `$values…` | `arglist` | —       | The strings to join. |

::: code-group

```scss [SCSS]
@use "@unsass/string";

$state: null;

.#{string.combine("button", $state, "label")} {
    color: darkcyan;
}
```

```css [CSS]
.button-label {
    color: darkcyan;
}
```

:::
