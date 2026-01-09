# Best Practices

Guidelines and recommendations for using the Rem package effectively.

## Consistent Base Size

Use the same base size throughout your project:

```scss
@use "@unsass/rem" with (
  $baseline: 16px  // Browser default
);
```

### Why 16px?

- It's the default browser font size
- Respects user's browser preferences
- Widely used standard across the web

```scss
// ❌ Avoid non-standard base sizes
@use "@unsass/rem" with (
  $baseline: 10px  // Makes math easier but breaks user preferences
);

// ✅ Good - Standard base size
@use "@unsass/rem" with (
  $baseline: 16px
);
```

## Keep Small Values in Pixels

Don't convert very small values like borders:

```scss
// ✅ Good
.component {
  border: 1px solid black;           // Keep in pixels
  border-radius: rem.convert(8px);   // Convert larger values
  padding: rem.convert(16px);        // Convert spacing
}

// ❌ Avoid
.component {
  border: rem.convert(1px) solid black;  // 0.0625rem is awkward
}
```

Keep these in pixels:
- Borders (1px, 2px)
- Box shadows (small offsets)
- Very fine details (<4px)

## Avoid Nested Calculations

Keep rem calculations simple:

```scss
// ❌ Avoid - Complex calculation
.component {
  padding: calc(#{rem.convert(16px)} + #{rem.convert(8px)});
}

// ✅ Good - Calculate first, then convert
.component {
  padding: rem.convert(24px);
}

// ✅ Also good - Use CSS calc with rem
.component {
  padding: calc(1rem + 0.5rem);  // 1.5rem
}
```

## Performance Considerations

Convert once, reuse many times:

```scss
// ❌ Avoid - Converts every time
.button {
  padding: rem.convert(12px) rem.convert(24px);
  margin: rem.convert(12px);
}

.input {
  padding: rem.convert(12px) rem.convert(24px);
}

// ✅ Good - Convert once
$input-padding-y: rem.convert(12px);
$input-padding-x: rem.convert(24px);

.button {
  padding: $input-padding-y $input-padding-x;
  margin: $input-padding-y;
}

.input {
  padding: $input-padding-y $input-padding-x;
}
```

## Don't Convert Everything

Some values should stay in their original units:

```scss
.component {
  // ✅ Keep these as-is
  opacity: 0.5;
  z-index: 10;
  flex: 1;
  order: 2;

  // ✅ Keep percentages
  width: 50%;

  // ✅ Keep viewport units
  height: 100vh;

  // ✅ Convert pixel values
  padding: rem.convert(16px);
  font-size: rem.convert(18px);
}
```
