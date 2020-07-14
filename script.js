window.onscroll = function() {myFunction()};

// get heading
var header = document.getElementById("head");

// Get offset position of navbar
var sticky = heading.offsetTop;

// add/remove sticky class to the heading
function myFunction() {
  if (window.pageYOffset > sticky) {
    heading.classList.add("sticky");
  } else {
    heading.classList.remove("sticky");
  }
}