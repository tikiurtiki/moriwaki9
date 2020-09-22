document.addEventListener("DOMContentLoaded", function () {
  new globalNav();
});

class globalNav {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector(".js-humberger-menu__trigger");
    this.DOM.header = document.querySelector(".header");
    this.DOM.navLists = document.querySelectorAll(".global-nav__link");
    this.eventType = this._getEventType();
    this._addEventHumbergerMenu();
    this._addEventNavList();

  }

  _getEventType() {
    return window.ontouchstart ? "touchstart" : "click";
  }

  _toggle() {
    this.DOM.header.classList.toggle("menu-open");
  }

  _addEventHumbergerMenu() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
  }
  _addEventNavList() {
    this.DOM.navLists.forEach((navList) => {
      navList.addEventListener(this.eventType, this._toggle.bind(this));
    });
  }
}
