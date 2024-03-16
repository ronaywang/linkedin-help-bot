document.addEventListener("DOMContentLoaded", function () {
  const targetElements = document.querySelectorAll("#ember14");

  targetElements.forEach(function (elem) {
    const arrow = document.createElement("img");
    arrow.setAttribute("src", chrome.runtime.getURL("arrow.png"));
    arrow.style.position = "absolute";

    // Adjust the positioning as necessary
    const rect = elem.getBoundingClientRect();
    arrow.style.top = rect.bottom + window.scrollY - 20 + "px"; // Place it above the element
    arrow.style.left = rect.left + window.scrollX - 20 + "px"; // Place it to the left of the element
    arrow.style.zIndex = 1000; // Ensure it's above most elements
    arrow.style.width = "20px"; // Adjust size as necessary

    document.body.appendChild(arrow);
  });
});
