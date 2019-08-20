export default new class Backdrop {
  constructor() {
    this.backdropSelector = 'backdrop';
    this.backdropVisibleSelector = 'backdrop_visible';
    this.htmlScrollbarSelector = 'backdrop-hasScrollbar';
    this.htmlNoScrollSelector = 'backdrop-noscroll';
    this.bodyFixedSelector = 'backdrop-fixed';
  }

  show() {
    this.addBackdrop();
    this.fixViewport();
    this.backdrop.classList.add(this.backdropVisibleSelector);
  }

  hide() {
    if (!this.isVisible()) return;

    this.backdrop.classList.remove(this.backdropVisibleSelector);
    this.unfixViewport();
  }

  addBackdrop() {
    if (this.backdrop) return;

    this.backdrop = document.createElement('div');
    this.backdrop.classList.add(this.backdropSelector);
    document.body.append(this.backdrop);
  }

  isVisible() {
    if (this.backdrop && this.backdrop.matches(`.${this.backdropVisibleSelector}`)) return true;
    return false;
  }

  fixViewport() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    document.body.style.marginTop = `-${scrollY}px`;

    if (window.innerWidth > document.documentElement.clientWidth) {
      document.documentElement.classList.add(this.htmlScrollbarSelector);
    }

    document.documentElement.classList.add(this.htmlNoScrollSelector);
    document.body.classList.add(this.bodyFixedSelector);
  }

  unfixViewport() {
    const newScrollTop = -document.body.style.marginTop.slice(0, -2);

    document.documentElement.classList.remove(this.htmlScrollbarSelector);
    document.documentElement.classList.remove(this.htmlNoScrollSelector);
    document.body.classList.remove(this.bodyFixedSelector);
    document.body.style.marginTop = null;
    window.scrollTo(null, newScrollTop);
  }
}();
