# @undercoatcsss/product-card

Product card is a component of the [Undercoat.css](https://github.com/undercoat/undercoat) framework.

![Travis (.org)](https://img.shields.io/travis/undercoat/undercoat.svg?style=flat-square) ![npm (scoped)](https://img.shields.io/npm/v/@undercoatcss/product-card?style=flat-square) ![WCAG 2.0 Level AA](https://img.shields.io/badge/WCAG_2.0-Level_AA-brightgreen.svg?style=flat-square) ![schema.org](https://img.shields.io/badge/microdata-schema.org-brightgreen.svg?style=flat-square)

> **CAUTION! IT'S UNDER HEAVY DEVELOPMENT CURRENTLY! DON'T USE IT IN PRODUCTION!**

## Description

**Product card** is a logically and functionally independent reusable **page component** ([block](https://en.bem.info/methodology/key-concepts/#block)) which presents the catalogue item and allows the user to add the product to the cart and/or navigate to the product page.

By default the product card has a vertical layout and consists of four blocks:
- media content section (contains the picture of the product or any other media content);
- header (contains the name of the product and a link to the product page);
- main section (contains a description);
- footer (contains the price and the "Add to cart" button).

## Installation
### NPM

```bash
npm install @undercoatcss/product-card
```

## Usage

After installation, import the assets into your project as usual or use the CDN link:

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/@undercoatcss/product-card@latest/dist/product-card.min.css">
```

### Webpack

```javascript
import '@undercoatcss/product-card/product-card.css';
```

## Settings

The component provides CSS custom property to change its defaults.

| Property                               | Default value
| -                                      | -
| --product-card-layout                  | 'product-card-media' 'product-card-header' 'product-card-main' 'product-card-footer'
| --product-card-template-columns        | 1fr

## HTML markup
### Without microdata

```html
<div class="product-card" role="listitem">
  <header class="product-card__header">
    <h2 class="product-card__heading">
      <a class="product-card__link" href="#">Product name</a>
    </h2>
  </header>
  <div class="product-card__main">
    <p class="product-card__description">Description text</p>
  </div>
  <footer class="product-card__footer">
    <span class="product-card__price-wrap">
      <span class="product-card__price-currency">$</span>
      <span class="product-card__price">99.9</span>
    </span>
    <button class="product-card__offer-button">Add to cart</button>
  </footer>
  <div class="product-card__media-wrap">
    <img class="product-card__image" src="/path/to/image.png" alt="Image description">
  </div>
</div>
```

### With microdata

```html
<div class="product-card" role="listitem" itemscope itemtype="http://schema.org/Product">
  <header class="product-card__header">
    <h2 class="product-card__heading" itemprop="name">
      <a class="product-card__link" itemprop="url" href="#">Product name</a>
    </h2>
  </header>
  <div class="product-card__main">
    <p class="product-card__description" itemprop="description">Description text</p>
  </div>
  <footer class="product-card__footer" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
    <span class="product-card__price-wrap">
      <span class="product-card__price-currency" itemprop="priceCurrency" content="USD">$</span>
      <span class="product-card__price" itemprop="price">99.9</span>
    </span>
    <button class="product-card__offer-button">Add to cart</button>
  </footer>
  <div class="product-card__media-wrap">
    <img  class="product-card__image" itemprop="image" src="/path/to/image.png" alt="Image description">
  </div>
</div>
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
