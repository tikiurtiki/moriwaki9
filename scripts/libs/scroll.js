document.addEventListener("DOMContentLoaded", function () {
  const reserveBtnContainer = document.querySelector(
    ".js-reserverbtn-container"
  );
  const reserveBtn = document.querySelector(".reserve-bottom-btn");

  const cb = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        reserveBtn.classList.add("inview");
      } else {
        reserveBtn.classList.remove("inview");
      }
    });
  };

  const io = new IntersectionObserver(cb);
  io.observe(reserveBtnContainer);
});