var overlay = document.getElementsByClassName("overlay");

for (let index = 0; index < overlay.length; index++) {
  overlay[index].addEventListener("click", function () { displayDescription(self); });
}

var displayDescription = (el) => {

};