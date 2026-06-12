# Best Practices

Guidelines and recommendations for using the Breakpoint package effectively.

## Mobile-First Approach

Use `breakpoint.up()` in priority for mobile-first design:

```scss
// ✅ Good - Mobile first
.component {
  width: 100%;

  @include breakpoint.up(md) {
    width: 50%;
  }

  @include breakpoint.up(lg) {
    width: 33.333%;
  }
}

// ❌ Avoid - Desktop first
.component {
  width: 33.333%;

  @include breakpoint.down(lg) {
    width: 50%;
  }

  @include breakpoint.down(md) {
    width: 100%;
  }
}
```

## Use Semantic Names

Choose meaningful names for custom breakpoints:

```scss
// ✅ Good
@use "@unsass/breakpoint" with (
  $screens: (
    "mobile": 375px,
    "tablet": 768px,
    "desktop": 1024px,
    "wide": 1440px
  )
);

// ❌ Avoid
@use "@unsass/breakpoint" with (
  $screens: (
    "tiny": 375px,
    "small": 768px,
    "big": 1024px
  )
);
```

## Limit Complexity

Avoid nesting too many breakpoints:

```scss
// ❌ Avoid - Too complex
.component {
  @include breakpoint.between(sm, md) {
    @include breakpoint.up(600px) {
      // Too specific
    }
  }
}

// ✅ Good - Clear and simple
.component {
  @include breakpoint.up(sm) {
    font-size: 14px;
  }

  @include breakpoint.up(md) {
    font-size: 16px;
  }
}
```

## Standard Values

Stick to common device widths:

```scss
@use "@unsass/breakpoint" with (
  $screens: (
    "sm": 640px,   // Mobile landscape
    "md": 768px,   // Tablet portrait
    "lg": 1024px,  // Tablet landscape / Small desktop
    "xl": 1280px,  // Desktop
    "2xl": 1536px  // Large desktop
  )
);
```

## Avoid Deep Nesting

Keep selector specificity low:

```scss
// ❌ Avoid
.page {
  .container {
    .card {
      @include breakpoint.up(md) {
        // Too nested
      }
    }
  }
}

// ✅ Good
.card {
  @include breakpoint.up(md) {
    // Direct and clear
  }
}
```

## Performance Considerations

Avoid generating duplicate media queries:

```scss
// ❌ Avoid - Generates duplicate @media rules
.button {
  @include breakpoint.up(md) {
    padding: 1rem;
  }
}

.card {
  @include breakpoint.up(md) {
    margin: 1rem;
  }
}

// ✅ Better - Group when possible
.button,
.card {
  @include breakpoint.up(md) {
    padding: 1rem;
  }
}
```

::: info
Modern build tools like PostCSS can merge duplicate media queries, but it's still good practice to group them.
:::
