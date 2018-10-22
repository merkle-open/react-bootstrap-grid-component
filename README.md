# React Bootstrap Grid Component

## Components

### Row

A Row need always Columns as children. Each other node-type will throw an error.

#### Usage

```tsx
import { Column } from "./components/Column";
import { Row } from "./components/Row";

<Row>
  <Column />
</Row>;
```

#### Properties

```tsx
/**
 * https://getbootstrap.com/docs/4.0/layout/grid/#vertical-alignment
 */
verticalAlignment?: "center" | "baseline";
/**
 * https://getbootstrap.com/docs/4.0/layout/grid/#horizontal-alignment
 */
horizontalAlignment?: "start" | "center" | "between" | "end";
/**
  * Rows must contain only columns to prevent negative margin issues
  */
children: Array<React.ReactElement<Column>> | React.ReactElement<Column>;
```

### Column

You are able to use a Column without a Row if you want.

```tsx
import { Column } from "./components/Column";
import { Row } from "./components/Row";

<Row>
  <Column size="6">
    <div>Content</div>
  </Column>
  <Column size={xs:12,md:6}>
    <div>Content</div>
  </Column>
</Row>
```

## Additional CSS

[./src/components/sizingbreakpoints.scss](./src/components/sizingbreakpoints.scss)

This SCSS-File extending the [Bootstrap default width declaration](https://getbootstrap.com/docs/4.0/utilities/sizing/) (h-w-25, h-w-50, h-w-75, h-w-100) with breakpoints.

### Prefixes

```scss
$helper-css-prefix: "h-";
```
