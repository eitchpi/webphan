// CSS Animation
document.addEventListener('DOMContentLoaded', function() {
  var animatedElements = document.querySelectorAll('.animate-slide-up, .animate-scale-up');

  function checkPosition() {
    animatedElements.forEach(function(element) {
      if (isElementInViewport(element, 0.2)) {
        element.classList.add('animate-show');
      } else {
        element.classList.remove('animate-show'); // Remove the class when element moves out of viewport
      }
    });
  }

  function isElementInViewport(el, threshold) {
      var rect = el.getBoundingClientRect();
      var windowHeight = window.innerHeight;
      var thresholdOffset = windowHeight * threshold;
      return (
        rect.bottom >= -thresholdOffset &&
        rect.top <= windowHeight + thresholdOffset
      );
    }      

  window.addEventListener('scroll', checkPosition);
  checkPosition(); // Check on initial load
});