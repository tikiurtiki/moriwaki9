document.addEventListener("DOMContentLoaded", function () {
  new aboutToshiki();
});

class aboutToshiki {
  constructor() {
    this.DOM = {};
    this.DOM.btn1 = document.querySelector(".js-card__text--btn");
    this.DOM.btn2 = document.querySelector(".js-about-toshiki__btn");
    this.DOM.aboutToshiki = document.querySelector(".about-toshiki");
    this.DOM.closeBtn = document.querySelector(".js-close-btn2");
    this.eventType = this._getEventType();
    this._addEvent1();
    this._addEvent2();
    this._addEventCloseBtn();
  }

  _getEventType() {
    return window.ontouchstart ? "touchstart" : "click";
  }

  _toggle() {
    this.DOM.aboutToshiki.classList.toggle("is-open");
  }

  _addEvent1() {
    this.DOM.btn1.addEventListener(this.eventType, this._toggle.bind(this));
  }
  _addEvent2() {
    this.DOM.btn2.addEventListener(this.eventType, this._toggle.bind(this));
  }
  _addEventCloseBtn() {
    this.DOM.closeBtn.addEventListener(this.eventType, this._toggle.bind(this));
  }
}