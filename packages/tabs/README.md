# @undercoatcss/tabs

## Installation
```sh
npm install @lovata/tabs
```

## Initialize Tabs
```javascript
import Tabs from '@lovata/tabs';

const myTabs = new Tabs('.selector', {
    hash: true,
    toggle: true,
});
```

## CSS
```css
@import '@undercoatcss/tabs/tabs';
```
CSS import isn't required. You can add your custom styles

## HTML layout
Example of html:
```html
<div class="tabs">
    <div class="tabs__list" role="tablist">
        <button 
            class="tabs__tab tabs__tab_active"
            role="tab"
            aria-selected="true"
            aria-controls="tab-panel-1"
            id="tabs-tab-1">Tab 1</button>
        <button 
            class="tabs__tab" 
            role="tab" 
            aria-selected="false" 
            aria-controls="tab-panel-2" 
            id="tabs-tab-2">Tab 2</button>
        <button 
            class="tabs__tab" 
            role="tab" 
            aria-selected="false" 
            aria-controls="tab-panel-3" 
            id="tabs-tab-3">Tab 3</button>
    </div>
    <div class="tabs__panel tabs__panel_active" 
         role="tabpanel" 
         id="tab-panel-1" 
         aria-labelledby="tabs-tab-1">
        <p>Tab panel 1</p>
    </div>
    <div class="tabs__panel" 
         role="tabpanel" 
         id="tab-panel-2" 
         aria-labelledby="tabs-tab-2">
        <p>Tab panel 2</p>
    </div>
    <div class="tabs__panel" 
         role="tabpanel" 
         id="tab-panel-3" 
         aria-labelledby="tabs-tab-3">
        <p>Tab panel 2</p>
    </div>
</div>
```
You can change all classnames in options object

## Arguments
```javascript
const myTabs = new Tabs(selector, options);
```
`selector` -- HTML-element (`HTMLElement`) or CSS-selector (`string`)
`options` -- `objects` of options (Optional)

## Tabs options

### bemSelector
**Type:** `string`. **Default value:** `tabs`
You can specify bem-block classname and all bem-elements classes will changed its classnames respectively.
If your HTML looks like:
```html
<div class="foo">
    <div class="foo__list" role="tablist">
        <button 
            class="foo__tab foo__tab_active"
            role="tab"
            aria-selected="true"
            aria-controls="tab-panel-1"
            id="tabs-tab-1">Tab 1</button>
        <button 
            class="foo__tab" 
            role="tab" 
            aria-selected="false" 
            aria-controls="tab-panel-2" 
            id="tabs-tab-2">Tab 2</button>
    </div>
    <div class="foo__panel foo__panel_active" 
         role="tabpanel" 
         id="tab-panel-1" 
         aria-labelledby="tabs-tab-1">
        <p>Tab panel 1</p>
    </div>
    <div class="foo__panel" 
         role="tabpanel" 
         id="tab-panel-2" 
         aria-labelledby="tabs-tab-2">
        <p>Tab panel 2</p>
    </div>
</div>
```
Set `bemSelector: 'foo'` and tabs will work.
If you need to specify every classname change [`classNames` option](###classNames)

### classNames
**Type:** `object`.
**Default value:**
```javascript
{
    tab: 'tabs__tab',
    tabActive: 'tabs__tab_active',
    panel: 'tabs__panel',
    panelActive: 'tabs__panel_active',
}
```
You can change every classname for elements. For example:
```javascript
{
    tab: 'foo__tab',
    tabActive: '_active',
    panel: 'foo__panel',
    panelActive: '_active',
}
```

### hash
**Type:** `boolean`. **Default value:** `false`
Whether Tabs should be changed browser hash when switching tabs

### init
**Type:** `boolean`. **Default value:** `true`
Whether Tabs should be initialised automatically when you create an instance. If disabled, then you need to init it manually by calling `myTabs.init()`

### toggle
**Type:** `boolean`. **Default value:** `false`
Whether Tabs can have noone active tab

## Methods

### init()
If option **init** is disabled, then will initialize Tabs instance
```javascript
const myTabs = new Tabs('.tabs', {
    init: false 
});

myTabs.init();
```

### activate(id)
Set active tabs panel with specified id
```javascript
myTabs.activate('tab-panel-3')
```

### deactivate()
If **toggle** is enabled, then active panel will be closed

### toggle(id)
If panel with specified id is active and **toggle** is enabled, then panel will be closed. If this panel isn't active, then its will be activated