export default class Tabs {
  constructor(element, options = {}) {
    this.container = typeof element === 'string' ? document.querySelector(element) : element;
    this.bemSelector = options.bemSelector || 'tabs';
    this.options = Object.assign({
      bemSelector: this.bemSelector,
      classNames: {
        tab: `${this.bemSelector}__tab`,
        tabActive: `${this.bemSelector}__tab_active`,
        panel: `${this.bemSelector}__panel`,
        panelActive: `${this.bemSelector}__panel_active`,
      },
      hash: false,
      init: true,
      toggle: false,
    }, options);
    this.tablist = this.container.querySelector('[role="tablist"]');
    this.tabs = this.container.querySelectorAll('[role="tab"]');
    this.panels = this.container.querySelectorAll('[role="tabpanel"]');
    this.tabBindingAttribute = 'aria-controls';

    if (this.options.init) this.init();
  }

  init() {
    this.activeTab = this.tablist.querySelector(`.${this.options.classNames.tabActive}`);
    this.activePanel = this.container.querySelector(`.${this.options.classNames.panelActive}`);
    this.activateHashed(() => {
      if (!this.activeTab && !this.activePanel && !this.options.toggle) {
        this.activate(undefined, false);
      }
    });
    this.bindEvents();

    if (this.options.onInit) this.options.onInit();
  }

  bindEvents() {
    [...this.tabs].forEach((tab) => {
      tab.addEventListener('click', () => {
        this.toggle(tab.getAttribute(this.tabBindingAttribute));
      });
    });

    this.tablist.addEventListener('keyup', (event) => {
      if (event.keyCode === 35) { // end key
        event.preventDefault();
        this.toggle(this.tabs[this.tabs.length - 1].getAttribute(this.tabBindingAttribute));
      } else if (event.keyCode === 36) { // home key
        event.preventDefault();
        this.toggle(this.tabs[0].getAttribute(this.tabBindingAttribute));
      } else if (event.keyCode === 37 && this.activeTab) { // left key
        event.preventDefault();
        let previous = [...this.tabs].indexOf(this.activeTab) - 1;
        previous = previous >= 0 ? previous : this.tabs.length - 1;
        this.toggle(this.tabs[previous].getAttribute(this.tabBindingAttribute));
      } else if (event.keyCode === 39 && this.activeTab) { // right key
        event.preventDefault();
        let next = [...this.tabs].indexOf(this.activeTab) + 1;
        next = next < this.tabs.length ? next : 0;
        this.toggle(this.tabs[next].getAttribute(this.tabBindingAttribute));
      }
    });

    window.addEventListener('popstate', () => {
      this.activateHashed();
    });
  }

  toggle(id) {
    const activeId = id || this.tabs[0].getAttribute(this.tabBindingAttribute);
    const tab = this.tablist.querySelector(`[${this.tabBindingAttribute}="${activeId}"]`);

    if (tab === this.activeTab) {
      if (!this.options.toggle) return;

      this.deactivate();
    } else {
      this.activate(id);
    }
  }

  activate(id, changeHash = true) {
    const activeId = id || this.tabs[0].getAttribute(this.tabBindingAttribute);

    this.deactivate();
    this.activeTab = this.tablist.querySelector(`[${this.tabBindingAttribute}="${activeId}"]`);
    this.activePanel = this.container.querySelector(`#${activeId}`);
    this.activeTab.setAttribute('aria-selected', 'true');
    this.activeTab.classList.add(this.options.classNames.tabActive);
    this.activeTab.focus();
    this.activePanel.classList.add(this.options.classNames.panelActive);
    if (this.options.hash && changeHash) {
      window.history.replaceState('', document.title, `${window.location.pathname}${window.location.search}#${activeId}`);
    }
    if (this.options.onActivate) this.options.onActivate(activeId);
  }

  activateHashed(callback) {
    const { hash } = window.location;

    if (hash.length <= 1) {
      if (callback) callback();
      return;
    }

    const hashedPanel = [...this.panels].some((panel) => {
      if (panel.id === hash.substr(1)) {
        this.activate(hash.substr(1));
        return true;
      }

      return false;
    });

    if (!hashedPanel && callback) callback();
  }

  deactivate() {
    if (this.activeTab) {
      this.activeTab.setAttribute('aria-selected', 'false');
      this.activeTab.classList.remove(this.options.classNames.tabActive);
      this.activeTab = null;
    }
    if (this.activePanel) {
      this.activePanel.classList.remove(this.options.classNames.panelActive);
      this.activePanel = null;
    }
    if (this.options.hash) {
      window.history.replaceState('', document.title, window.location.pathname + window.location.search);
    }
  }
}
