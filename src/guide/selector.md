# Selector

Manage the CSS selectors and generate classes.

## Installation

Install the package as dependencies for the project.

::: code-group

```shell [npm]
npm install @unsass/selector
```

```shell [yarn]
yarn add @unsass/selector
```

:::

## API References

### `create()`

| Parameter         | Default | Type             | Description                                                                        |
|-------------------|---------|------------------|------------------------------------------------------------------------------------|
| `$selector`       | `N/A`   | `string`         | The main classe name.                                                              |
| `$scope`          | `null`  | `string`, `list` | The scope name generated before the classe name.                                   |
| `$separator`      | `:`     | `string`         | Separator between classe name and scope name. We recommend to use only `:` or `@`. |
| `$suffix`         | `false` | `boolean`        | Generate the scope name after de class name.                                       |
| `$pseudo-class`   | `null`  | `string`         | Use the CSS pseudo-class.                                                          |
| `$pseudo-element` | `null`  | `string`         | Use the CSS pseudo-element.                                                        |
| `$root`           | `false` | `boolean`        | Use the Sass `@at-root` rule for extract CSS from this parent.                     |

## Examples

### Selector

::: code-group

```scss [Scss]
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

### Scope

::: code-group

```scss [Scss]
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

### Separator

::: code-group

```scss [Scss]
@include selector.create("foo", "md", "@") {
    color: darkcyan;
}
```

```css [CSS]
.md\@foo {
    color: darkcyan;
}
```

:::

### Suffix

::: code-group

```scss [Scss]
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

### Root

::: code-group

```scss [Scss]
.foo {
    @include selector.create(&, "md", $root: true) {
        color: darkcyan;
    }
}
```

```css [CSS]
.md\:foo {
    color: darkcyan;
}
```

:::
