var overlays = document.getElementsByClassName("overlay");
var titles = document.getElementsByClassName("project-title");
var captions = document.getElementsByClassName("caption");

// add event listener on overlays and titles
for (let index = 0; index < overlays.length; index++) {
  overlays[index].addEventListener("click", function(event) { showCaption(this, event); });
  overlays[index].addEventListener("mouseenter", function(event) { showCaption(this, event); });
  titles[index].addEventListener("click", function (event) { showCaption(this, event); });
  captions[index].addEventListener("animationend", function() { hideCaption(this); }, false);
  captions[index].addEventListener("mouseleave", function() { fadeOutCaption(); });
}

var fadeOutCaption = () => {
  const caption = document.getElementsByClassName("fadeIn")[0];
  if (caption) { fadeOut(caption); }
};

var showCaption = (el, event) => {
  event.stopPropagation();
  const projectName = el.classList[1].split("-")[1];
  const caption = document.getElementsByClassName(`caption-${projectName}`)[0];
  fadeOutCaption();
  fadeIn(caption);
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target.classList[0] !== "caption" && event.target.classList[0] !== "caption-text") {
    fadeOutCaption();
  }
};

var fadeIn = (caption) => {
  caption.classList.remove("fadeOut"); 
  caption.style.zIndex = "4";
  caption.classList.add("fadeIn");
};

var fadeOut = (caption) => {
  caption.classList.remove("fadeIn");  
  caption.classList.add("fadeOut");
};

var hideCaption = (caption) => {
  if (caption.classList[2] === "fadeOut") {
    caption.style.zIndex = "-1";
  }
};

