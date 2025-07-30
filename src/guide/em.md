# Em

Manage the `em` unit easily.

## Installation

Install the package as dependencies for the project.

::: code-group

```shell [npm]
npm install @unsass/em
```

```shell [yarn]
yarn add @unsass/em
```

:::

## Usage

::: code-group

```scss [Scss]
@use "@unsass/em";

.foo {
    font-size: em.convert(16px, 16px);
}
```

```css [CSS]
.foo {
    font-size: 1em;
}
```

:::

## API References

### `convert($values...)`

::: code-group

```scss [Scss]
@use "@unsass/em";

.foo {
    font-size: em.convert(16px, 16px); // Single value.
    margin: em.convert(20px 30px, 16px); // Multiple values.
    border: em.convert(1px solid darkcyan, 16px); // Multiple mixed values.
    box-shadow: em.convert(0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75), 16px); // Comma-separated values.
}
```

```css [CSS]
.foo {
    font-size: 1em;
    margin: 1.25em 1.875em;
    border: 0.0625em solid darkcyan;
    box-shadow: 0 0 0.625em 0.3125em rgba(0, 139, 139, 0.75), inset 0 0 0.625em 0.3125em rgba(0, 139, 139, 0.75);
}
```

:::
