# @undercoatcsss/grid

Grid is a component of the [Undercoat.css](https://github.com/undercoat/undercoat) framework.

![Travis (.org)](https://img.shields.io/travis/undercoat/undercoat.svg?style=flat-square) ![npm (scoped)](https://img.shields.io/npm/v/@undercoatcss/grid?style=flat-square) ![WCAG 2.0 Level AA](https://img.shields.io/badge/WCAG_2.0-Level_AA-brightgreen.svg?style=flat-square) ![schema.org](https://img.shields.io/badge/microdata-schema.org-brightgreen.svg?style=flat-square)

> **CAUTION! IT'S UNDER HEAVY DEVELOPMENT CURRENTLY! DON'T USE IT IN PRODUCTION!**

## Description

Grid is a logically and functionally independent reusable **page component** (block), which represents a **grid system** for designing a layout of the pages.

Grid is based on 24 columns (tracks) by default. It's like 12 columns but more flexible since it can be split into 2, 3, 4 and even 6, 8 and 12 equal parts! But you can configure the number of columns following your requirements.

## Installation

### NPM

```bash
npm install @undercoatcss/grid
```

## Usage

After installation, you can link or import the assets into your project:

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/@undercoatcss/grid@latest/dist/grid.min.css">
```

### Webpack

```javascript
import '@undercoatcss/grid/grid.css';
```

## Settings

The default grid settings are stored in CSS custom properties and are below (px units):
```CSS
  --grid-columns-number: 24; /* columns number */
  --grid-columns-width-min: 13;    /* column (track) min width */
  --grid-columns-width-max: 50;    /* column (track) max width */
  --grid-width-max: 1920;    /* grid wrapper max width */
  --grid-column-gap: 0;      /* columns gutter (gap) width */
  --grid-margin-inline: 2vw; /* column grid inline margins */
```

Min width of the grid wrapper is set automatically by multiplying of `--grid-columns-number` on `--grid-columns-width-min` custom properties (variables). Max width is stored in `--grid-width-max` custom property and can be changed manually.

> Don't use equal values for `--grid-columns-width-min` and `--grid-columns-width-max` custom properties because it leads to fixed column width, which isn't appropriate for the mobile first approach!

## Layout templates

The grid is based on CSS Grid Layout Module Level 1. The `grid-template-columns` property is used for specifying the track list for the grid columns. Use the `grid-template-areas` property to add specific page layouts over the grid columns.

Columns help keep the UI svelte and template areas make UI components positioning simple as never before. Just specify page areas for placing UI components.

## Subgrids

Due to the fact that Subgrids section from CSS Grid Layout Module Level 2 specification has a weak browsers support, we have to forward subgrids manually in grid container items if it's necessary.

Add the utility CSS class `.subgrid` to a grid item in the markup (HTML) to make it a new grid container with the same number of columns. Make sure the value of the `--grid-columns-number` custom property in this context is equal to the number of the columns which grid item takes. 

## Column percentage size custom property

There's a special custom property `--grid-column-size` with a dynamic automatically calculated value. It returns a column size in percents based on the value of current columns number specified in the `--grid-columns-number` custom property for a current context.

It's useful to place items on the virtual grid in a non-grid container placed itself on the grid. In the example below each flex item will have a width equal to three columns of the grid and will be aligned to it:

```CSS
.flex-container {
  grid-column: grid-start / grid-end;
  display: flex;
}

.flex-item {
  display: flex;
  justify-content: space-between;
  flex-basis: calc(var(--grid-column-size) * 3);
}
```
<!-- TODO: Fix property order following the Undercoat stylelint config -->

## Expanding blocks

On the large screens, it can be appropriate to limit the width of the content area and make it less than the viewport width. For example, to make centered horizontally content area 1200px width with a 20-columns grid set `--grid-columns-width-max` value to `50`.

In this case, you can expand a grid item to the full `--grid-width-max` width by adding `.grid__itemExpand` CSS class to it.

`.subgrid` and `.grid__itemExpand` can be combined to get an expanded block with a subgrid.
