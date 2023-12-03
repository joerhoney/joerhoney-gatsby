// Function to call other functions on DOM load.
var domReady = function(callback) {
  document.readyState === "interactive" || document.readyState === "complete"
    ? callback()
    : document.addEventListener("DOMContentLoaded", callback);
};
// Detect JavaScript.
// (for applying conditional CSS).
var detectJS = function() {
  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");
};
//IE Fix.
if (typeof NodeList.prototype.forEach !== typeof alert) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
// Function to check for a given class.
function hasClass(elem, className) {
  return new RegExp(" " + className + " ").test(" " + elem.className + " ");
}
// Function to remove a specified class from all elements in an array.
function removeClassAll(arr, clss) {
  Object.keys(arr).forEach(function(key) {
    arr[key].classList.remove(clss);
  });
}
// Get Accordions.
var accordions = document.querySelectorAll(".accordion");
// Toggle accordion items "open" state on click.
var togglable = function(accrds) {
  // accrds is required.
  if (!accrds) {
    return;
  }
  // Apply this to each .accordion element.
  accrds.forEach(function(accordion) {
    // Loop through all items of this accordion.
    for (var i = 0; i < accordion.children.length; i++) {
      // Add a class attribute if missing.
      if (accordion.children[i].getAttribute("class")) {
      } else {
        accordion.children[i].setAttribute("class", "");
      }
      // Add a reference to associate tabs with.
      accordion.children[i].setAttribute("data-index", i);
    }
    // Now clarifying accordion item elements more procisely to avoid conflicts with dynamically added elements.
    accordionArray = accordion.querySelectorAll("[data-index]");
    // Create the tabs.
    var tabs = document.createElement("ul");
    tabs.classList.add("tabs");
    for (var i = 0; i < accordionArray.length; i++) {
      var tabLabel = accordionArray[i].querySelector(".tab");
      var tab = document.createElement("li");
      if (tabLabel) {
        // The inner element with class "tab" is used to define the tab's text.
        tab.innerHTML += tabLabel.textContent;
      } else {
        // If there is no element with class "tab" we will just number it.
        tab.innerHTML += i + 1;
      }
      if (hasClass(accordionArray[i], "open")) {
        tab.setAttribute("class", "active");
      } else {
        tab.setAttribute("class", "");
      }
      tab.setAttribute("data-index", i);
      tabs.appendChild(tab);
    }
    // Place tabs before the accordion.
    accordion.insertAdjacentElement("beforebegin", tabs);
    // Loop through all items of this accordion.
    for (var i = 0; i < accordionArray.length; i++) {
      // Associate the tabs with the accordion items with click listeners.
      tabs.children[i].addEventListener("click", function() {
        var index = this.getAttribute("data-index");
        // Remove "open" class from all items in the accordion.
        removeClassAll(accordionArray, "open");
        removeClassAll(tabs.children, "active");
        // Add "open" class to the item this tab belongs to.
        accordionArray[index].classList.add("open");
        this.classList.add("active");
      });
      // If there is a toggle switch, listen for clicks and activate the associated tab as well.
      var toggler = accordionArray[i].querySelector(".toggler");
      if (toggler) {
        toggler.addEventListener("click", function() {
          var index = this.parentNode.getAttribute("data-index");
          removeClassAll(accordionArray, "open");
          removeClassAll(tabs.children, "active");
          tabs.children[index].classList.add("active");
          this.parentNode.classList.add("open");
        });
      }
    }
  });
};
// Run the Functions.
domReady(detectJS());
domReady(togglable(accordions));
