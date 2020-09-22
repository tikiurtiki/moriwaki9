$(function () {
  const trigger = $(".js-accordion__title");
  const text = $(".js-accordion__body");
  const bodyText = $(".js-accordion__body");
  bodyText.hide();
  const btn = $(".accordion__title--btn");


  trigger.on("click", function () {
    $(this).next(text).slideToggle(300);
    // $(text).not($(this).next(text)).slideUp(300);
    $(this).children(btn).toggleClass("is-open");
  });
});
