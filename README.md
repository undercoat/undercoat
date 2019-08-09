Undercoat.css is a **lightweight** framework with **no default theme** out of the box. So you **don't need to fight** against it!


![Travis (.org)](https://img.shields.io/travis/undercoat/undercoat.svg?style=flat-square) ![GitHub release](https://img.shields.io/github/release/undercoat/undercoat.svg?style=flat-square) ![npm (scoped)](https://img.shields.io/npm/v/@undercoatcss/framework) ![npm](https://img.shields.io/npm/dt/undercoat/.svg?style=flat-square) ![Twitter Follow](https://img.shields.io/twitter/follow/undercoatcss.svg?label=Follow&style=flat-square) ![WCAG 2.0 Level AA](https://img.shields.io/badge/WCAG_2.0-Level_AA-brightgreen.svg?style=flat-square) ![schema.org](https://img.shields.io/badge/microdata-schema.org-brightgreen.svg?style=flat-square)

---

**CAUTION! IT'S UNDER HEAVY DEVELOPMENT CURRENTLY! DON'T USE IT IN PRODUCTION!**

---

## Contents

1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Browser support](#Browser-support)
5. [Key concepts](#Key-concepts)
6. [Contributing](#Contributing)

## Description

Undercoat.css or just Undercoat is ready to use out of the box because it's written on vanilla CSS and doesn't require building. The main advantages are:

- flexible and predictable architecture based on [BEM methodology](https://en.bem.info/methodology);
- no need to override the framework styles because there's no default theme provided;
- SEO-friendly semantic HTML markup enriched with [microdata](https://schema.org);
- mobile-friendly by virtue of following [Google recommendations](https://developers.google.com/search/mobile-sites) and using web standards capabilities;
- [WCAG 2.0](https://www.w3.org/TR/WCAG20) compliance markup and styles for developing inclusive web interfaces.

## Installation

Please note, Undercoat is constantly in development! Try it out on your own risk!

### NPM

```sh
npm i @undercoatcss/framework
```

## Usage

After installation, you can link or import the CSS file into your project:

### HTML

```html
<link rel="stylesheet" href="/path/to/undercoat.css" />
```

### CSS

```css
@import '/path/to/undercoat.css';
```

### Via PostCSS and [postcss-import](https://github.com/postcss/postcss-import)

```sh
import 'undercoat';
```

### Via webpack and [css-loader](https://github.com/webpack-contrib/css-loader)

```sh
import 'undercoat';
```

### CDN

Coming soon!

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

- [BEM methodology](#BEM-methodology)
- [No default theme](#No-default-theme)
- [Mobile friendly](#Mobile-friendly)
- [SEO friendly](#SEO-friendly)
- [WCAG 2.0 compliance](#WCAG-20-compliance)

### BEM methodology

Undercoat provides a set of common page components (breadcrumbs, cards, form elements etc.). Each component is logically and functionally independent [block](https://en.bem.info/methodology/key-concepts/#block). Blocks allow for their re-use, as well as facilitating the project development and support process. Read more about blocks in official BEM [documentation](https://en.bem.info/methodology/key-concepts/#block-features).

Undercoat follows BEM naming convention with the [classic naming scheme](https://en.bem.info/methodology/naming-convention/#naming-rules), where the name of an entity is unique. The same BEM entity always has the same name in all technologies (CSS, JavaScript, HTML etc.). 

Undercoat follows an alternative file structure approach to organizing the framework's file system. It's [nested](https://en.bem.info/methodology/filestructure/#nested) on the root level and [flat](https://en.bem.info/methodology/filestructure/#flat) on the component level.

**Example**

```sh
project
    common.blocks/
        input/                                # Directory for the input block 
            input_type_search.css             # CSS implementation of the input_type modifier 
            input__clear_visible.css          # CSS implementation of the input__clear_visible modifier 
            input__clear.css                  # CSS implementation of the input__clear element 
            input__clear.js                   # JavaScript implementation of the input__clear element 
            input.css                         # CSS implementation of the input block 
            input.js                          # JavaScript implementation of the input block 
```

### No default theme

Undercoat doesn't provide a default theme for the components. However, each component includes CSS code of the layout composition and not the appearance. So there's no need for a developer to override the framework styles. Just write (extend) your own code (add new properties) next to the component code following BEM's redefinition levels [rules](https://en.bem.info/methodology/redefinition-levels).

**Example**

```sh
project/
    common.blocks/       # redefinition level with framework's blocks 
        breadcrumbs/     # breadcrumbs block composition styles
    project.blocks/      # redefinition level with project blocks 
        breadcrumbs/     # breadcrumbs block project appereance styles
```

Just remember Undercoat doesn't impose design decisions that you have to fight to undo!

### Mobile friendly

Following actual global trends, undercoat is based on the mobile-first approach.

Each component provides best practices for dealing with content images on different screen resolutions and image formats.

**Example**

```html
<picture>
    <source 
        src="picture.webp"
        srcset="picture.webp 350w, picture.webp 650w" 
        sizes="(max-width: 600px) 300px, (min-width: 600px) 600px"
        alt="Picture description">
    <img 
        src="picture.jpg"
        srcset="picture.jpg 350w, picture.jpg 650w" 
        sizes="(max-width: 600px) 300px, (min-width: 600px) 600px"
        alt="Picture description">
</picture>
```

### SEO friendly

HTML markup of all components was developed based on semantic of HTML5 tags. It gives a lot of benefits besides SEO. In addition to semantic markup Undercoat components are enriched with structured metadata using [microdata](https://schema.org/docs/gs.html) for common cases (product cards, reviews, etc.).

These efforts lead to successful project indexing by search engines and enhance website "snippet" by making it "rich", or a short piece of quoted text shown when the page appears in [search listings](https://developers.google.com/search/docs/guides/mark-up-content).

### WCAG 2.0 compliance

SEO appropriate HTML markup semantics of Undercoat components improves the accessibility of the user interface.

Accessibility of components is improved by following [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices). All of the components will be polished to be [WCAG 2.0](https://www.w3.org/TR/WCAG20) compliant.

## Contributing

If you're interested in the improvement of this project you can help in the following ways:

- bug reporting and new feature requesting by creating issues on plugin [GitHub page](https://github.com/undercoat/undercoat/issues);
- contribution to a project following these [instructions](https://github.com/undercoat/undercoat/blob/master/CONTRIBUTING.md).
