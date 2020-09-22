document.addEventListener("DOMContentLoaded", function () {
  new payment();
});

class payment {
  constructor() {
    this.DOM = {};
    this.DOM.offlineRadioBtn = document.querySelector(".js-offline-radiobtn");
    this.DOM.onlineRadioBtn = document.querySelector(".js-online-radiobtn");
    this.DOM.offlinePayment = document.querySelector(".js-offline-payment");
    this.DOM.onlinePayment = document.querySelector(".js-online-payment");
    this.eventType = this._getEventType();
    this._onlineAddEvent();
    this._offlineAddEvent();
  }

  _getEventType() {
    return window.ontouchstart ? "touchstart" : "click";
  }

  _offlineToggle() {
    this.DOM.offlinePayment.style.display = "block";
    this.DOM.onlinePayment.style.display = "none";
    
  }
  _onlineToggle() {
    this.DOM.onlinePayment.style.display ="block";
    this.DOM.offlinePayment.style.display ="none";
  }
  
  _onlineAddEvent() {
    this.DOM.onlineRadioBtn.addEventListener(this.eventType, this._onlineToggle.bind(this));
  }
  _offlineAddEvent() {
    this.DOM.offlineRadioBtn.addEventListener(this.eventType, this._offlineToggle.bind(this));
  }
}