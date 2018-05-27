var overlays = document.getElementsByClassName("overlay");
var titles = document.getElementsByClassName("project-title");

// add event listener on overlays and titles
for (let index = 0; index < overlays.length; index++) {
  overlays[index].addEventListener("click", function(event) { showCaption(this, event); });
  titles[index].addEventListener("click", function (event) { showCaption(this, event); });
}

var closeCaptions = (targetCaption) => {
  const captions = document.getElementsByClassName("caption");
  for (let index = 0; index < captions.length; index++) {
    const caption = captions[index];
    if (caption !== targetCaption) { fadeOut(caption); }
  }
};

var showCaption = (el, event) => {
  const projectName = el.classList[1].split("-")[1];
  const caption = document.getElementsByClassName(`caption-${projectName}`)[0];
  console.log(event.target);
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
  caption.classList.remove("fadeIn");  
  caption.classList.add("fadeOut");
  setTimeout(() => { caption.style.zIndex = "-1";}, 700);
};
