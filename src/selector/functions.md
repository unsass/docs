---
description: "Reference for @unsass/selector functions: pseudo-class, pseudo-element, to-class and to-id selector helpers."
---

# Functions

Accessed through the `selector` namespace (`@use "@unsass/selector"`). These string helpers build selector
fragments; [`create()`](/selector/mixins) uses them internally, but they're available when you compose selectors by
hand.

## `pseudo-class($selector, $pseudo-class)` <Badge type="tip" text="function" />

Appends a pseudo-class to a selector string.

| Parameter        | Type     | Default | Description            |
|------------------|----------|---------|------------------------|
| `$selector`      | `string` | —       | The base selector.     |
| `$pseudo-class`  | `string` | —       | The pseudo-class name. |

```scss
selector.pseudo-class(".foo", "hover"); // ".foo:hover"
```

## `pseudo-element($selector, $pseudo-element)` <Badge type="tip" text="function" />

Appends a pseudo-element to a selector string.

| Parameter          | Type     | Default | Description              |
|--------------------|----------|---------|--------------------------|
| `$selector`        | `string` | —       | The base selector.       |
| `$pseudo-element`  | `string` | —       | The pseudo-element name. |

```scss
selector.pseudo-element(".foo", "before"); // ".foo::before"
```

## `to-class($selector)` <Badge type="tip" text="function" />

Prefixes a name with `.` to form a class selector.

| Parameter   | Type     | Default | Description    |
|-------------|----------|---------|----------------|
| `$selector` | `string` | —       | The bare name. |

```scss
selector.to-class("foo"); // ".foo"
```

## `to-id($selector)` <Badge type="tip" text="function" />

Prefixes a name with `#` to form an id selector.

| Parameter   | Type     | Default | Description    |
|-------------|----------|---------|----------------|
| `$selector` | `string` | —       | The bare name. |

```scss
selector.to-id("foo"); // "#foo"
```
