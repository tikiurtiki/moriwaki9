document.addEventListener("DOMContentLoaded", function () {
  new customerVideo();
});

class customerVideo {
  constructor() {
    this.DOM = {};
    this.DOM.btns = document.querySelectorAll(".js-card__btn");
    this.DOM.video = document.querySelector(".js-customer-video");
    this.DOM.closeBtn = document.querySelector(".js-close-btn");
    this.eventType = this._getEventType();
    this._addEvent();
    this._addEventCloseBtn();
  }
  _getEventType() {
    return window.ontouchstart ? "touchstart" : "click";
  }
  _toggle() {
    this.DOM.video.classList.toggle("is-open");
  }
  _addEvent() {
    this.DOM.btns.forEach((btn) => {
      btn.addEventListener(this.eventType, this._toggle.bind(this));
    });
  }
  _addEventCloseBtn() {
    this.DOM.closeBtn.addEventListener(this.eventType, this._toggle.bind(this));
  }
}
