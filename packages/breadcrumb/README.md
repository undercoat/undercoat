# @undercoatcsss/breadcrumb

Backdrop is a component of the [Undercoat.css](https://github.com/undercoat/undercoat) framework.

![Travis (.org)](https://img.shields.io/travis/undercoat/undercoat.svg?style=flat-square) ![npm (scoped)](https://img.shields.io/npm/v/@undercoatcss/breadcrumb?style=flat-square) ![WCAG 2.0 Level AA](https://img.shields.io/badge/WCAG_2.0-Level_AA-brightgreen.svg?style=flat-square) ![schema.org](https://img.shields.io/badge/microdata-schema.org-brightgreen.svg?style=flat-square)

> **CAUTION! IT'S UNDER HEAVY DEVELOPMENT CURRENTLY! DON'T USE IT IN PRODUCTION!**

## Description

Breadcrumb is a logically and functionally independent reusable **page component** (block), which represents a **secondary navigation scheme** that reveals the user's location in a website.

## Installation

### NPM

```bash
npm install @undercoatcss/breadcrumb
```

## Usage

After installation, you can link or import the assets into your project:

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/@undercoatcss/breadcrumb@latest/dist/breadcrumb.min.css">
```

### Webpack

```javascript
import '@undercoatcss/breadcrumb/breadcrumb.css';
```

## Settings

The component provides CSS custom property to change its defaults.

| Property                               | Default value
| -                                      | -
| --breadcrumb--separator                | \2192

## HTML markup

### Without microdata

```html
<nav class="breadcrumb" aria-label="Breadcrumb">
  <ul class="breadcrumb__list" role="list">
    <li class="breadcrumb__item" role="listitem">
      <a class="breadcrumb__link" href="#">Index</a>
    </li>
    <li class="breadcrumb__item" role="listitem">
      <a class="breadcrumb__link" href="#">Category</a>
    </li>
    <li class="breadcrumb__item" role="listitem">
      <a class="breadcrumb__link" aria-current="page">Subategory</a>
    </li>
  </ul>
</nav>
```

### With microdata

```html
<nav class="breadcrumb" aria-label="Breadcrumb">
  <ul class="breadcrumb__list" role="list" itemscope itemtype="http://schema.org/BreadcrumbList">
    <li class="breadcrumb__item" role="listitem" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
      <span itemprop="name">
        <a class="breadcrumbs__link" href="#" itemtype="http://schema.org/Thing" itemprop="item">Index</a>
      </span>
      <meta itemprop="position" content="1">
    </li>
    <li class="breadcrumb__item" role="listitem" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
      <span itemprop="name">
        <a class="breadcrumb__link" href="#" itemtype="http://schema.org/Thing" itemprop="item">Category</a>
      </span>
      <meta itemprop="position" content="2">
    </li>
    <li class="breadcrumb__item" role="listitem">
      <a class="breadcrumb__link" aria-current="page">Subategory</a>
    </li>
  </ul>
</nav>
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

We support only recent browsers to keep the components codebase clean and provide high performance.

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
