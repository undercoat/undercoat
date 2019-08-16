# `@undercoatcss/dialog`

## Installation

```sh
npm install @undercoatcss/dialog
```

## Initialization

### Javascript
```javascript
import Dialog from '@undercoatcss/dialog';
```

### CSS
```css
@import '@undercoatcss/dialog/dialog';
```

## HTML layout

```html
<div class="dialog" id="{id}">
    <div class="dialog__body">
        <button type="button" data-dialog-close></button>
        ...
    </div>
</div>
```

Element with attribute `data-dialog-close` click will close current dialog.
Element with attribute `data-dialog-open="{id}"` click will open dialog with specified id:

```html
<button type="button" data-dialog-open="{id}">...</button>
```

## CSS settings

Helper accepts some css custom properties

| Property | Default value |
| --- | --- |
| --dialog__body--transition-timing-function | ease |
| --dialog__body--transition-duration | 0.5s |

## Events

### showDialog

Event `showDialog` dispatch when dialog show

### hideDialog

Event `hideDialog` dispatch when dialog hide

## Methods

### show(id)

Show dialog

| Param | Type |
| --- | --- |
| id | <code>string</code> |

### hide({ hideBackdrop })

Hide opened dialog

| Param | Type | Description |
| --- | --- | --- |
| hideBackdrop | <code>boolean</code> | Wheter to hide backdrop. Default - `true` |

### activateFocusTrap()

Activate focus trap for active dialog

### deactivateFocusTrap()

Deactivate focus trap for active dialog