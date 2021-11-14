window.addEventListener("load", text);

function text() {
  document.querySelector(".text1").classList.add("rotate1");
  document.querySelector(".text2").classList.add("rotate2");
  document.querySelector(".text3").classList.add("rotate3");
  document.querySelector(".text4").classList.add("rotate4");
}

const smallDevice = window.matchMedia("(max-width: 576px)").matches;
if (smallDevice) {
  document.querySelector("#videoBG").remove();
  const img = document.createElement("img");
  img.src = "poster.webp";
  img.alt = "";
  document.querySelector("body").appendChild(img);
}

const largeDevice = window.matchMedia("(min-width: 577px)").matches;

// https://stackoverflow.com/questions/28605591/prevent-html5-videos-from-downloading-the-files-on-mobile-videojs
if (largeDevice) {
  //video sources
  const sources = document.querySelectorAll("video#videoBG source");
  // reference for the video object the sources is contained inside
  const myVideo = document.querySelector("video#videoBG");

  for (var i = 0; i < sources.length; i++) {
    sources[i].setAttribute("src", sources[i].getAttribute("data-src"));
  }

  myVideo.load();
}
