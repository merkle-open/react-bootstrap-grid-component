# React Bootstrap Grid Component

## Instalation

Run following commands for installation needed packages
``
npm install
``

Start Storybook with
``
npm run storybook
``

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
#### Properties

```tsx
direction?: "row" | "col";

size?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

verticalAlignment?: "top" | "center" | "bottom" | "justify";

horizontalAlignment?: "left" | "right" | "center" | "stretch";
```

Note: If you set size to be equal to 0 the column will disappear

## Additional CSS

[./src/components/sizingbreakpoints.scss](./src/components/sizingbreakpoints.scss)

This SCSS-File extending the [Bootstrap default width declaration](https://getbootstrap.com/docs/4.0/utilities/sizing/) (h-w-25, h-w-50, h-w-75, h-w-100) with breakpoints.

### Prefixes

If you want to override some of the default classes of the  bootstrap grid, use prefixes. 
There are prefixes for container, rows and columns

Depending if you want to apply changes globaly or only in one/couple of components then define
the prefix on top of desired page

```tsx
import prefixes from './components/PrefixManager';

prefixes.container | prefixes.column | prefixes.row = 'h-';
```

```scss
$helper-css-prefix: "h-";
```
