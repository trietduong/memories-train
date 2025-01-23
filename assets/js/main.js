// Force page scroll position to top at page refresh in HTML
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

document.getElementById('skipAnimationButton').addEventListener('click', function() {
            var elements = document.querySelectorAll('.imessage p,.imessage img');
            elements.forEach(function(element) {
              element.style.animation = 'none';
                element.style.transition = 'none';
            });
        });