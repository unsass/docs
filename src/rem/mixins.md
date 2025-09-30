# Application API

## declaration()

Sets declaration with conversion of `px` unit to `rem`, with optional `!important`

- **Arguments**

    | Argument     | Default | Type    | Description                       |
    |--------------|---------|---------|-----------------------------------|
    | `$property`  | null    | String  | Mandatory. The CSS property name. |
    | `$value`     | null    | String  | Mandatory. The property value.    |
    | `$important` | false   | Boolean | Enable the `!important` option.   |

- **Details**

    ```scss
    @include rem.declaration($property: String, $value: String, $important: Boolean);
    ```
  
- **Examples**

    Single value

    ::: code-group
    ```scss
    @use "@unsass/rem";
    
    .foo {
        @include rem.declaration(font-size, 16px);
    }
    ```

    ```css
    .foo {
        font-size: 1rem;
    }
    ```
    :::

    Multiple values

    ::: code-group
    ```scss
    @use "@unsass/rem";
    
    .foo {
        @include rem.declaration(margin, 20px 30px);
    }
    ```
    
    ```css
    .foo {
        margin: 1.25rem 1.875rem;
    }
    ```
    :::

    Multiple mixed values

    ::: code-group
    ```scss
    @use "@unsass/rem";
    
    .foo {
        @include rem.declaration(border, 1px solid darkcyan);
    }
    ```
    
    ```css
    .foo {
        border: 0.0625rem solid darkcyan;
    }
    ```
    :::

    Comma-separated values

    ::: code-group
    ```scss
    @use "@unsass/rem";
    
    .foo {
        @include rem.declaration(box-shadow, 0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75));
    }
    ```
    
    ```css
    .foo {
        box-shadow: 0 0 0.625rem 0.3125rem rgba(0, 139, 139, 0.75), inset 0 0 0.625rem 0.3125rem rgba(0, 139, 139, 0.75);
    }
    ```
    :::

## baseline()

Sets declaration with `font-size` property, with optional `!important`.

- **Arguments**

    | Argument     | Default | Type    | Description                       |
    |--------------|---------|---------|-----------------------------------|
    | `$important` | false   | Boolean | Enable the `!important` option.   |

- **Details**

    ```scss
    @include rem.baseline($important: Boolean);
    ```

- **Example**

    General

    ::: code-group
    ```scss
    @use "@unsass/rem";
    
    html,
    body {
        @include rem.baseline($important: false);
    }
    ```
    
    ```css
    html,
    body {
        font-size: 100%;
    }
    ```
    :::

    With `!important`

    ::: code-group
    ```scss
    @use "@unsass/rem";
    
    html,
    body {
        @include rem.baseline($important: true);
    }
    ```
    
    ```css
    html,
    body {
        font-size: 100% !important;
    }
    ```
    :::
