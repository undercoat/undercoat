import createFocusTrap from 'focus-trap';
import Backdrop from '@undercoatcss/backdrop';

export default new class Dialog {
  constructor() {
    this.dialogSelector = 'dialog';
    this.dialogBodySelector = 'dialog__body';
    this.dialogCloseButtonSelector = '[data-dialog-close]';
    this.dialogOpenButtonSelector = '[data-dialog]';
    this.dialogActiveSelector = 'dialog_active';

    this.handler();
  }

  handler() {
    this.showDialogEvent = new Event('showDialog', {
      bubbles: true,
    });
    this.hideDialogEvent = new Event('hideDialog', {
      bubbles: true,
    });

    document.addEventListener('click', ({ target }) => {
      const dialogOpenButton = target.closest(this.dialogOpenButtonSelector);

      if (!dialogOpenButton) return;

      const dialogId = dialogOpenButton.dataset.dialog;

      this.show(dialogId);
    });

    document.addEventListener('click', ({ target }) => {
      const dialogCloseButton = target.closest(this.dialogCloseButtonSelector);

      if (!dialogCloseButton) return;

      this.hide();
    });

    document.addEventListener('click', ({ target }) => {
      if (target.closest(`.${this.dialogSelector}`)
        && !target.closest(`.${this.dialogBodySelector}`)) {
        this.hide();
      }
    });

    window.addEventListener('keydown', ({ keyCode }) => {
      if (keyCode === 27
        && this.activeDialog
        && document.activeElement.closest(`.${this.dialogSelector}`)) {
        this.hide();
      }
    });

    window.addEventListener('popstate', () => {
      this.showHashed();
    });

    this.showHashed();
  }

  show(id) {
    if (!document.querySelector(`#${id}.${this.dialogSelector}`)) return;

    if (this.activeDialog) {
      this.hide(false);
    } else {
      Backdrop.show();
    }

    this.activeDialog = document.querySelector(`#${id}`);
    this.replaceDialogToBodyEnd();
    this.activeDialog.classList.add(this.dialogActiveSelector);
    window.history.replaceState('', document.title, `${window.location.pathname}${window.location.search}#${id}`);
    this.activeDialog.dispatchEvent(this.showDialogEvent);
    this.activateFocusTrap();
  }

  showHashed() {
    const { hash } = window.location;

    if (hash.length > 1) this.show(hash.substr(1));
  }

  hide(hideBackdrop = true) {
    if (!this.activeDialog) return;

    this.deactivateFocusTrap();
    this.activeDialog.dispatchEvent(this.hideDialogEvent);
    this.activeDialog.classList.remove(this.dialogActiveSelector);
    window.history.replaceState('', document.title, window.location.pathname + window.location.search);

    if (hideBackdrop) {
      Backdrop.hide();
      this.activeDialog = null;
    }
  }

  replaceDialogToBodyEnd() {
    if (this.activeDialog.parentNode === document.body) return;

    this.activeDialog.parentNode.removeChild(this.activeDialog);
    document.body.append(this.activeDialog);
  }

  activateFocusTrap() {
    if (!this.activeDialog) return;

    this.focusTrap = createFocusTrap(this.activeDialog);
    this.focusTrap.activate();
  }

  deactivateFocusTrap() {
    if (!this.focusTrap) return;

    this.focusTrap.deactivate();
  }
}();
