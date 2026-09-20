---
description: "Reference for @unsass/selector mixins: create() for prefixed, suffixed and pseudo selectors, and media() for media queries."
---

# Mixins

Accessed through the `selector` namespace (`@use "@unsass/selector"`).

## `create($selector, $scope, $separator, $suffix, $pseudo-class, $pseudo-element, $root)`

Generates a class selector and wraps the passed content in it. The selector name may be written with or without a
leading dot.

| Parameter         | Type             | Default | Description                                     |
|-------------------|------------------|---------|-------------------------------------------------|
| `$selector`       | `string`, `list` | —       | The class name, with or without a leading `.`.  |
| `$scope`          | `string`, `list` | `null`  | Key(s) to prefix (or suffix) the selector with. |
| `$separator`      | `string`         | `":"`   | Character between scope and selector.           |
| `$suffix`         | `boolean`        | `false` | Append the scope instead of prefixing it.       |
| `$pseudo-class`   | `string`         | `null`  | Add a pseudo-class, e.g. `"hover"`.             |
| `$pseudo-element` | `string`         | `null`  | Add a pseudo-element, e.g. `"before"`.          |
| `$root`           | `boolean`        | `false` | Emit at the stylesheet root (`@at-root`).       |

### Plain selector

::: code-group

```scss [SCSS]
@use "@unsass/selector";

@include selector.create("foo") {
    color: darkcyan;
}
```

```css [CSS]
.foo {
    color: darkcyan;
}
```

:::

### Scoped (prefix)

::: code-group

```scss [SCSS]
@use "@unsass/selector";

@include selector.create("foo", "md") {
    color: darkcyan;
}
```

```css [CSS]
.md\:foo {
    color: darkcyan;
}
```

:::

### Scoped (suffix)

::: code-group

```scss [SCSS]
@use "@unsass/selector";

@include selector.create("foo", "md", $suffix: true) {
    color: darkcyan;
}
```

```css [CSS]
.foo\:md {
    color: darkcyan;
}
```

:::

### Multiple scopes

Pass a list to `$scope` to chain several keys — in order, before (or after, with `$suffix`) the selector.

::: code-group

```scss [SCSS]
@use "@unsass/selector";

@include selector.create("foo", ("sm" "md")) {
    color: darkcyan;
}
```

```css [CSS]
.sm:md:foo {
    color: darkcyan;
}
```

:::

::: tip
A scope starting with a digit (like `2xl`) is escaped automatically: `create("foo", "2xl")` emits
`.\32 xl\:foo`.
:::

### Pseudo-class

::: code-group

```scss [SCSS]
@use "@unsass/selector";

@include selector.create("foo", $pseudo-class: "hover") {
    color: darkcyan;
}
```

```css [CSS]
.foo:hover {
    color: darkcyan;
}
```

:::

### Pseudo-element

::: code-group

```scss [SCSS]
@use "@unsass/selector";

@include selector.create("foo", $pseudo-element: "before") {
    color: darkcyan;
}
```

```css [CSS]
.foo::before {
    color: darkcyan;
}
```

:::

::: warning
A `$suffix` cannot be combined with a `$pseudo-class` or `$pseudo-element` — doing so raises a compile-time error.
:::

## `media($query)`

Wraps content in a raw `@media` query. A thin convenience over writing the at-rule by hand.

| Parameter | Type     | Default | Description                               |
|-----------|----------|---------|-------------------------------------------|
| `$query`  | `string` | —       | The media query condition, e.g. `screen`. |

::: code-group

```scss [SCSS]
@use "@unsass/selector";

.foo {
    @include selector.media("screen") {
        color: darkcyan;
    }
}
```

```css [CSS]
@media screen {
    .foo {
        color: darkcyan;
    }
}
```

:::
