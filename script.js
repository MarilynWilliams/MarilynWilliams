var header = document.getElementById("heading");
var sticky = heading.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    heading.classList.add("sticky");
  } else {
    heading.classList.remove("sticky");
  }
}