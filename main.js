var overlays = document.getElementsByClassName("overlay");
var titles = document.getElementsByClassName("project-title");
var captions = document.getElementsByClassName("caption");

// add event listener on overlays and titles
for (let index = 0; index < overlays.length; index++) {
  overlays[index].addEventListener("click", function(event) { showCaption(this, event); });
  titles[index].addEventListener("click", function (event) { showCaption(this, event); });
  captions[index].addEventListener("animationend", function() { changeZIndex(this) }, false);
}

var closeCaptions = (targetCaption) => {
  const allCaptions = document.getElementsByClassName("caption");
  for (let index = 0; index < allCaptions.length; index++) {
    const caption = allCaptions[index];
    if (caption !== targetCaption && caption.classList[2] === "fadeIn" ) { fadeOut(caption); }
  }
};

var showCaption = (el, event) => {
  const projectName = el.classList[1].split("-")[1];
  const caption = document.getElementsByClassName(`caption-${projectName}`)[0];
  event.stopPropagation();
  closeCaptions(caption);
  fadeIn(caption);
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  console.log("window");
  console.log(event.target);
  if (event.target.classList[0] !== "caption" && event.target.classList[0] !== "caption-text") {
    closeCaptions();
  }
};

var fadeIn = (caption) => {
  caption.classList.remove("fadeOut"); 
  caption.style.zIndex = "4";
  caption.classList.add("fadeIn");
};

var fadeOut = (caption) => {
  console.log(caption);
  caption.classList.remove("fadeIn");  
  caption.classList.add("fadeOut");
};

var changeZIndex = (caption) => {
  if (caption.classList[2] === "fadeOut") {
    caption.style.zIndex = "-1";
  }
};
