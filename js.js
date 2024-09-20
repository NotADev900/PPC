window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function animateCounter(element, start, end, duration) {
  const range = end - start;
  let current = start;
  const increment = range / (duration / 10);
  const stepTime = 10;

  const timer = setInterval(() => {
    current += increment;
    if (
      (increment > 0 && current >= end) ||
      (increment < 0 && current <= end)
    ) {
      current = end;
      clearInterval(timer);
    }
    element.textContent = Math.round(current); // Round to avoid decimals

    // Append "+" if this is the second or third paragraph
    if (element.dataset.index === "2" || element.dataset.index === "3") {
      element.textContent += "+";
    }
  }, stepTime);
}

// Select all counter elements
document.querySelectorAll(".counter").forEach((counter, index) => {
  // Add a data attribute to track the index
  counter.dataset.index = index + 1;

  const targetValue = parseInt(counter.getAttribute("data-target"));
  const duration = parseInt(counter.getAttribute("data-duration"));
  animateCounter(counter, 0, targetValue, duration);
});
