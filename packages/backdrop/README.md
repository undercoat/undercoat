# @undercoatcsss/backdrop

Backdrop is a component of the [Undercoat.css](https://github.com/undercoat/undercoat) framework.

![Travis (.org)](https://img.shields.io/travis/undercoat/undercoat.svg?style=flat-square) ![npm (scoped)](https://img.shields.io/npm/v/@undercoatcss/backdrop?style=flat-square) ![WCAG 2.0 Level AA](https://img.shields.io/badge/WCAG_2.0-Level_AA-brightgreen.svg?style=flat-square) ![schema.org](https://img.shields.io/badge/microdata-schema.org-brightgreen.svg?style=flat-square)

> **CAUTION! IT'S UNDER HEAVY DEVELOPMENT CURRENTLY! DON'T USE IT IN PRODUCTION!**

## Description

Breadcrumbs is a logically and functionally independent reusable page component (block), which represents a camouflage surface. It appears behind all other surfaces in the UI to make it disabled. Сommonly used with dialog component (modal).

## Installation

### NPM

```bash
npm install @undercoatcss/backdrop
```

## Usage

After installation, you can link or import the assets into your project:

### CDN

```html
<script src="https://unpkg.com/@undercoatcss/backdrop@latest/dist/backdrop.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@undercoatcss/backdrop@latest/dist/backdrop.min.css">
```

### Webpack

```javascript
import Backdrop from '@undercoatcss/backdrop';
import '@undercoatcss/backdrop/backdrop.css';
```

## Settings

The component provides CSS custom properties to change change predefined settings.

| Property                               | Default value |
| -                                      | -             |
| --backdrop--z-index                    | 99            |
| --backdrop--opacity                    | 0.5           |
| --backdrop--background-color           | #000000       |
| --backdrop--transition-duration        | 0.5s          |
| --backdrop--transition-timing-function | ease          |

## Methods

The component provides the following Javascript methods:

### show()

Shows backdrop.

```javascript
Backdrop.show();
```

### hide()

Hides backdrop.

```javascript
Backdrop.hide();
```

## Browser support

Undercoat is compatible with **2 recent** desktop versions of:

* Chrome
* Edge
* Firefox
* Opera
* Safari

and **2 recent** mobile versions of:

* Chrome
* Safari

We support only recent browsers to keep our components' codebase clean and provide high performance.

The `.browserlist` config is provided.

## Key concepts

Undercoat is based on the next main principles:

- [BEM methodology](https://github.com/undercoat/undercoat/blob/master/README.md#bem-methodology)
- [No default theme](https://github.com/undercoat/undercoat/blob/master/README.md#no-default-theme)
- [Mobile friendly](https://github.com/undercoat/undercoat/blob/master/README.md#mobile-friendly)
- [SEO friendly](https://github.com/undercoat/undercoat/blob/master/README.md#seo-friendly)
- [WCAG 2.0 compliance](https://github.com/undercoat/undercoat/blob/master/README.md#wcag-20-compliance)



## Contributing

If you're interested in the improvement of this project you can help in the following ways:

- bug reporting and new feature requesting by creating issues on plugin [GitHub page](https://github.com/undercoat/undercoat/issues);
- contribution to a project following these [instructions](https://github.com/undercoat/undercoat/blob/master/CONTRIBUTING.md).
