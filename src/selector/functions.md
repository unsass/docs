---
description: "Reference for @unsass/selector functions: pseudo-class, pseudo-element, is, where, has, exclude, to-class and to-id selector helpers."
---

# Functions

Accessed through the `selector` namespace (`@use "@unsass/selector"`). These string helpers build selector
fragments; [`create()`](/selector/mixins) uses them internally, but they're available when you compose selectors by
hand.

## `pseudo-class($selector, $pseudo-class)` <Badge type="tip" text="function" />

Appends a pseudo-class to a selector string.

| Parameter       | Type     | Default | Description            |
|-----------------|----------|---------|------------------------|
| `$selector`     | `string` | —       | The base selector.     |
| `$pseudo-class` | `string` | —       | The pseudo-class name. |

```scss
selector.pseudo-class(".foo", "hover"); // ".foo:hover"
```

## `pseudo-element($selector, $pseudo-element)` <Badge type="tip" text="function" />

Appends a pseudo-element to a selector string.

| Parameter         | Type     | Default | Description              |
|-------------------|----------|---------|--------------------------|
| `$selector`       | `string` | —       | The base selector.       |
| `$pseudo-element` | `string` | —       | The pseudo-element name. |

```scss
selector.pseudo-element(".foo", "before"); // ".foo::before"
```

## `is($selector, $args...)` <Badge type="tip" text="function" />

Appends an `:is()` pseudo-class matching any of the given selectors.

| Parameter   | Type      | Default | Description                     |
|-------------|-----------|---------|---------------------------------|
| `$selector` | `string`  | —       | The base selector.              |
| `$args…`    | `arglist` | —       | One or more selectors to match. |

```scss
selector.is("article", "h1", "h2"); // "article:is(h1, h2)"
```

## `where($selector, $args...)` <Badge type="tip" text="function" />

Appends a `:where()` pseudo-class — like `:is()`, but with zero specificity.

| Parameter   | Type      | Default | Description                     |
|-------------|-----------|---------|---------------------------------|
| `$selector` | `string`  | —       | The base selector.              |
| `$args…`    | `arglist` | —       | One or more selectors to match. |

```scss
selector.where(".prose", "a", "button"); // ".prose:where(a, button)"
```

## `has($selector, $args...)` <Badge type="tip" text="function" />

Appends a `:has()` pseudo-class matching elements that contain the given relative selectors.

| Parameter   | Type      | Default | Description                                 |
|-------------|-----------|---------|---------------------------------------------|
| `$selector` | `string`  | —       | The base selector.                          |
| `$args…`    | `arglist` | —       | One or more relative selectors to look for. |

```scss
selector.has(".card", "> img"); // ".card:has(> img)"
```

## `exclude($selector, $args...)` <Badge type="tip" text="function" />

Appends a `:not()` pseudo-class excluding the given selectors. Named `exclude` because `not` is a reserved Sass
keyword.

| Parameter   | Type      | Default | Description                       |
|-------------|-----------|---------|-----------------------------------|
| `$selector` | `string`  | —       | The base selector.                |
| `$args…`    | `arglist` | —       | One or more selectors to exclude. |

```scss
selector.exclude(".btn", ".btn--disabled"); // ".btn:not(.btn--disabled)"
```

## `to-class($name)` <Badge type="tip" text="function" />

Prefixes a name with `.` to form a class selector.

| Parameter | Type     | Default | Description    |
|-----------|----------|---------|----------------|
| `$name`   | `string` | —       | The bare name. |

```scss
selector.to-class("foo"); // ".foo"
```

## `to-id($name)` <Badge type="tip" text="function" />

Prefixes a name with `#` to form an id selector.

| Parameter | Type     | Default | Description    |
|-----------|----------|---------|----------------|
| `$name`   | `string` | —       | The bare name. |

```scss
selector.to-id("foo"); // "#foo"
```
