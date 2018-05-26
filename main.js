var overlays = document.getElementsByClassName("overlay");

// add event listener on overlays
for (let index = 0; index < overlays.length; index++) {
  const element = overlays[index];
  element.addEventListener("click", function(event) { showCaption(this, event);});
}

var closeCaptions = () => {
  const captions = document.getElementsByClassName("caption");
  for (let index = 0; index < captions.length; index++) {
    const caption = captions[index];
    fadeOut(caption);
  }
};

var showCaption = (el, event) => {
  console.log(event.target);
  event.stopPropagation();
  closeCaptions();
  const projectName = el.classList[1].split("-")[1];
  const caption = document.getElementsByClassName(`caption-${projectName}`)[0];
  fadeIn(caption);
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  console.log("window");
  console.log(event.target);
  if (event.target.classList[0] !== "caption") {
    closeCaptions();
  }
};

var fadeIn = (caption) => {
  caption.classList.remove("fadeOut"); 
  caption.style.zIndex = "4";
  caption.classList.add("fadeIn");
};

var fadeOut = (caption) => {
  caption.classList.remove("fadeIn");  
  caption.style.zIndex = "-1";
};
