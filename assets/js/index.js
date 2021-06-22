var className = "inverted";
var scrollTrigger = 60;

window.onscroll = function () {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByClassName("custom-navbar")[0].classList.add(className);
  } else {
    document.getElementsByClassName("custom-navbar")[0].classList.remove(className);
  }
};
