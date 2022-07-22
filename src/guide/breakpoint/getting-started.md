# Getting Started

This section will help you to basically used `@unsass/breakpoint` inside your project.

## Installing

Add `@unsass/breakpoint` as dependencies for the project.

```shell
npm install @unsass/breakpoint
```

## Basic usage

Use `@unsass/breakpoint` inside the project.

```scss
@use "@unsass/breakpoint";

.foo {
    @include breakpoint.up("lg") {
        color: darkcyan;
    }
}
```

## Tokens

| Key   | Value    |
|-------|----------|
| `xs`  | `360px`  |
| `sm`  | `480px`  |
| `md`  | `768px`  |
| `lg`  | `960px`  |
| `xl`  | `1200px` |
| `2xl` | `1400px` |
