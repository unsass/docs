---
description: "Real-world patterns combining UnSass packages: responsive rem sizing, themeable custom properties, responsive utility classes and em scales."
---

# Patterns

The packages are designed to compose. These recipes show several of them working together on realistic components —
each example is plain, valid Sass that compiles to standard CSS.

## Responsive sizing

Pair [`breakpoint`](/breakpoint/getting-started) with [`rem`](/rem/getting-started) to scale spacing across
viewports while keeping values in accessible `rem` units.

::: code-group

```scss [SCSS]
@use "@unsass/breakpoint";
@use "@unsass/rem";

.card {
    @include rem.declaration(padding, 16px);

    @include breakpoint.up("md") {
        @include rem.declaration(padding, 24px);
    }
}
```

```css [CSS]
.card {
    padding: 1rem;
}

@media (min-width: 768px) {
    .card {
        padding: 1.5rem;
    }
}
```

:::

## Themeable components

Expose a component's colors as [custom properties](/css/configuration) so they can be themed from the outside,
with sensible fallbacks baked in.

::: code-group

```scss [SCSS]
@use "@unsass/css";
@use "@unsass/css/custom-properties" as cp;

:root {
    @include css.declaration(cp.create("card-bg", white));
    @include css.declaration(cp.create("card-fg", #0f172a));
}

.card {
    @include css.declaration(background, cp.create("card-bg"));
    @include css.declaration(color, cp.create("card-fg"));
}
```

```css [CSS]
:root {
    --card-bg: white;
    --card-fg: #0f172a;
}

.card {
    background: var(--card-bg);
    color: var(--card-fg);
}
```

:::

## Responsive utility classes

Combine [`selector`](/selector/getting-started) with [`breakpoint`](/breakpoint/getting-started) to generate
prefixed, breakpoint-scoped utility classes.

::: code-group

```scss [SCSS]
@use "@unsass/selector";
@use "@unsass/breakpoint";

@include selector.create("row", "md") {
    @include breakpoint.up("md") {
        display: flex;
        gap: 1rem;
    }
}
```

```css [CSS]
@media (min-width: 768px) {
    .md\:row {
        display: flex;
        gap: 1rem;
    }
}
```

:::

## Context-relative type scale

Use [`em`](/em/getting-started) when a value should track the element's own font size — handy for spacing inside a
heading that may be resized.

::: code-group

```scss [SCSS]
@use "@unsass/em";

.card__title {
    font-size: 20px;
    @include em.declaration(margin-bottom, 8px, 20px);
}
```

```css [CSS]
.card__title {
    font-size: 20px;
    margin-bottom: 0.4em;
}
```

:::

## Centralized configuration

For a single source of truth across the suite, configure each package once and forward it under a prefix. See
[Best Practices](/guide/best-practices#centralize-configuration) for the full pattern.
