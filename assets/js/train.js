// Force page scroll position to top at page refresh in HTML
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


function checkForVisibility() {
  var headers = document.querySelectorAll(".header");
  headers.forEach(function(header) {
    if (isElementInViewport(header)) {
      header.classList.add("headerVisible");
    } else {
      header.classList.remove("headerVisible");
    }
  });
}

// scroll image

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", checkForVisibility, false);
  addEventListener("load", checkForVisibility, false);
  addEventListener("scroll", checkForVisibility, false);
}

$(window).on("load", function () {
  add_onscroll_effect($(".scrolleffect1"), "open");
  add_onscroll_effect($(".scrolleffect2"), "open");
  add_onscroll_effect($(".scrolleffect3"), "open");
});
$(window).on("scroll", function () {
  add_onscroll_effect($(".scrolleffect1"), "open", 0, 500);
  add_onscroll_effect($(".scrolleffect2"), "open", 0, 500);
  add_onscroll_effect($(".scrolleffect3"), "open", 0, 500);
});
function add_onscroll_effect(obj, trigger_class, win_width = 0, scarto = 0) {
  if ($(window).width() < win_width) return;
  if (obj.length == 0) return;

  var currOffset = 0,
    win_scroll = $(window).scrollTop();

  obj.each(function (index) {
    currOffset = $(this).offset().top - scarto;

    if (win_scroll > currOffset) {
      $(this).addClass(trigger_class);
    }
  });
}
