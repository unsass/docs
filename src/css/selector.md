# `selector` <Badge type="tip" text="API"/>

The `selector()` mixin helps manage prefixes and suffixes in CSS class and ID selectors.

## Parameters

| Parameter    | Description                | Default     |
|--------------|----------------------------|-------------|
| `$key`       | The selector key. Ex `md`. | `undefined` |
| `$separator` | The key separator.         | `:`         |
| `$suffix`    | Place the key as a suffix. | `false`     |
| `$selector`  | Target selector.           | `&`         |

## Usage

::: code-group
```scss
@use "@unsass/css";

.foo {
    color: darkorange;

    @include css.selector("md") {
        color: darkcyan;
    }
}
```

```css
.foo {
    color: darkorange;
}

.md\:foo {
    color: darkcyan;
}
```
:::

### Custom separator

::: code-group
```scss
@use "@unsass/css";

.foo {
    @include css.selector("md", "@") {
        color: darkcyan;
    }
}
```

```css
.md\@foo {
    color: darkcyan;
}
```
:::

### Suffix

::: code-group
```scss
@use "@unsass/css";

.foo {
    @include css.selector("md", $suffix: true) {
        color: darkcyan;
    }
}
```

```css
.foo\:md {
    color: darkcyan;
}
```
:::

### Custom selector

::: code-group
```scss
@use "@unsass/css";

@include css.selector("md", $selector: ".foo") {
    color: darkcyan;
}
```

```css
.md\:foo {
    color: darkcyan;
}
```
:::
