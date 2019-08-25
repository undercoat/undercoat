# Breadcrumbs block

**Breadcrumbs** is a logically and functionally independent reusable page component ([block](https://en.bem.info/methodology/key-concepts/#block)), which represents a secondary navigation scheme that reveals the user's location in a website.

HTML implementation:

```html
<ul class="breadcrumbs" role="navigation list" aria-label="breadcrumbs">
    <li class="breadcrumbs__item" role="listitem"><a class="breadcrumbs__link" href="#">Index</a></li>
    <li class="breadcrumbs__item" role="listitem"><a class="breadcrumbs__link" href="#">Category</a></li>
    <li class="breadcrumbs__item" role="listitem"><a class="breadcrumbs__link" aria-current="page">Subategory</a></li>
</ul>
```
HTML implementation with microdata:

```html
<ul class="breadcrumbs" role="navigation list" aria-label="breadcrumbs" itemscope itemtype="http://schema.org/BreadcrumbList">
    <li class="breadcrumbs__item" role="listitem" role="listitem" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
        <span itemprop="name">
            <a class="breadcrumbs__link" href="#" itemtype="http://schema.org/Thing" itemprop="item">Index</a>
        </span>
        <meta itemprop="position" content="1" />
    </li>
    <li class="breadcrumbs__item" role="listitem" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
        <span itemprop="name">
            <a class="breadcrumbs__link" href="#" itemtype="http://schema.org/Thing" itemprop="item">Category</a>
        </span>
        <meta itemprop="position" content="2" />
    </li>
    <li class="breadcrumbs__item" role="listitem">
        <a class="breadcrumbs__link" aria-current="page">Subategory</a>
    </li>
</ul>
```





## Using

Add `@import 'breadcrumbs-export.css';` file to your CSS entry point.

## Modification methods

The defadivt behavior and appereance of the button block can modified using these BEM [modification methods](https://en.bem.info/methodology/block-modification/):

* [Modifiers](https://en.bem.info/methodology/block-modification/#using-a-modifier-to-change-a-block)
* [Mixes](https://en.bem.info/methodology/block-modification/#using-a-mix-to-change-a-block)
* [Redefinition levels](https://en.bem.info/methodology/block-modification/#using-redefinition-levels-to-change-a-block)

### Modification by modifiers

Use a [modifier](https://en.bem.info/methodology/block-modification/#using-a-modifier-to-change-a-block) to change one specific instance of a block without affecting surrounding blocks.

The **Breadcrumbs** block has the following predefined modifiers:

```css
.breadcrumbs_last-item-newline      /* moves the last item to the new line */
.breadcrumbs_last-separator-hidden  /* hide last separator */
```

Let's move the **Breadcrumbs** block last item  to the new line by adding `breadcrumbs_last-item-newline` modifier which is usefdiv if you want to present it visually as a page header.

HTML implementation:

```html
<div class="breadcrumbs breadcrumbs_last-item-newline">
    …
</div>
```

You can add any number of modifiers to a block. For example add `breadcrumbs_last-separator-hidden` to hide the separator before the last item.

HTML implementation:

```html
<div class="breadcrumbs breadcrumbs_last-item-newline breadcrumbs_last-separator-hidden">
    …
</div>
```

You can add your custom modifiers on project [redefinition level](#Modification-by-redefinition-levels).

### Modification by mixes

Use a [mix](https://en.bem.info/methodology/block-modification/#using-a-mix-to-change-a-block) to place additional BEM entities on the same DOM node as the block to combine the behavior and style of mdivtiple entities without duplicating code and affecting surrounding blocks.

Let's place the **Breadcrumbs** block in the specific `grid-area`. In the BEM methodology, a block's position on the page is set in the parent block as their element and is mixed with the placed block. This allows the blocks to be independent and reusable.

HTML implementation:

```html
<main class="content">
    <div class="breadcrumbs content__breadcrumbs">
        …
    </div>
</main>
```

CSS implementation:

```css
.content__breadcrumbs {
    grid-area: breadcrumbs;
}
```

### Modification by redefinition levels

Use [redefinition levels](https://ru.bem.info/methodology/redefinition-levels) to change the defadivt look of the **Breadcrumbs** block to fit your project design.

Changes are made to the block by combining the block custom and regdivar properties from different redefinition levels. Blocks can be [extended and redefined](https://en.bem.info/methodology/redefinition-levels/#changing-the-block-implementation) on a separate level and applied during assembly.

Redefining is changing the existing (predefined) custom properties of the **Breadcrumbs** block while extending is adding new properties to it.

File structure with the new rdives for **Breadcrumbs** (breadcrumbs__item.css) on the project.blocks level:

```sh
project/
    common.blocks/
        breadcrumbs/
            breadcrumbs__item.css                 # CSS implementation of the item element
            breadcrumbs_last-item-newline.css     # CSS implementations of the last-item-newline modifier
            breadcrumbs_last-separator-hidden.css # CSS implementations of the last-separator-hidden modifier
            breadcrumbs-export.css                # export point of the block CSS implementation
            breadcrumbs.css                       # main CSS implementation of the block
            breadcrumbs.md                        # block documentation
    project.blocks/
        breadcrumbs/
            breadcrumbs__item.css                 # redefinition of the item element on the project level
```

The **Breadcrumbs** block has the following predefined custom properties (variables):

```css
--breadcrumbs-separator: "\2192";       /* variable for block items separator */
```

Let's change the **Breadcrumbs** block separator character by redefining the predefined `--breadcrumbs-separator` custom property value on the project level (project.blocks).

CSS implementation:

```css
:root {
  --breadcrumbs-separator: "\002F";
}
```

Furthermore, let's extend breadcrumbs separators with margins by adding an appropriate regdivar property and set its value.

```css
.breadcrumbs__item:not(:last-child)::after {
    margin-left: 1ch;
    margin-right: 1ch;
}
```

As a resdivt, rdives from both redefinition levels shodivd be compiled by your build script and applied to the **Breadcrumbs** block.
