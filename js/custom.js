// inout masking 
document.addEventListener("DOMContentLoaded", function () {
  const e = document.getElementById("phonemobile");
  e &&
    (e.addEventListener("input", function () {
      formatUSPhoneNumber(this);
    }),
    e.addEventListener("keydown", function (t) {
      const n = t.key;
      if ("Backspace" === n) {
        // Remove one character at a time when backspace is pressed
        e.value = e.value.slice(0, -1);
      } else if ("Tab" !== n) {
        const t = e.value.replace(/\D/g, "");
        (3 !== t.length && 6 !== t.length) ||
          (e.value = `(${t.slice(0, 3)}) ${t.slice(3)}-`);
      }
    }),
    (e.maxLength = 14));
});
document.addEventListener("DOMContentLoaded", function () {
  const e = document.getElementById("contactNumber");
  e &&
    (e.addEventListener("input", function () {
      formatUSPhoneNumber(this);
    }),
    e.addEventListener("keydown", function (t) {
      const n = t.key;
      if ("Backspace" === n) {
        // Remove one character at a time when backspace is pressed
        e.value = e.value.slice(0, -1);
      } else if ("Tab" !== n) {
        const t = e.value.replace(/\D/g, "");
        (3 !== t.length && 6 !== t.length) ||
          (e.value = `(${t.slice(0, 3)}) ${t.slice(3)}-`);
      }
    }),
    (e.maxLength = 14));
});

// page loader
//============================================================================================
// Function to hide elements with class "loaderHide" with smooth fade-out
function hideElementsWithFadeOut() {
    var loderHideElement = document.querySelector(".loderHide");
    if (loderHideElement) {
        loderHideElement.style.transition = "opacity 0.5s ease-out";
        setTimeout(() => {
            loderHideElement.style.opacity = 0;
        }, 10);
        var loderHideDivElements = document.querySelectorAll(".loderHide div");
        loderHideDivElements.forEach((div) => {
            div.style.transition = "opacity 0.5s ease-out";
            setTimeout(() => {
                div.style.opacity = 0;
            }, 10);
        });
        setTimeout(() => {
            loderHideElement.style.display = "none";
            loderHideDivElements.forEach((div) => {
                div.style.display = "none";
            });
        }, 500);
    }
}
// Set a timeout to call the function after a delay
setTimeout(hideElementsWithFadeOut, 200);
// page loader end
//============================================================================================
// scroll animation 
// ===========================================================================================
var scroll = window.requestAnimationFrame || function(callback) {
    window.setTimeout(callback, 1000 / 60);
};
var elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
    Array.prototype.forEach.call(elementsToShow, function(element) {
        if (isElementInViewport(element)) {
            element.classList.add("is-visible");
        } else {
            element.classList.remove("is-visible");
        }
    });
    scroll(loop);
}
// Call the loop for the first time
loop();
// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0) || (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) || (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)));
}
// scroll animation 
// ===========================================================================================

// vedio play button script
// ==========================================================================================
 const video = document.getElementById("bradVideo");
      const button = document.getElementById("videoButton");

      button.addEventListener("click", function () {
        if (video.paused) {
          video.play();
          document
            .getElementById("PlayButton")
            .setAttribute("src", "media/youtubeStop.svg");
        } else {
          video.pause();
          document
            .getElementById("PlayButton")
            .setAttribute("src", "media/youtubeIcon.svg");
        }
      });
// vedio play button script end
// ==========================================================================================


// video placeholder
//============================================================================================
const videoIds = ["P1vtpjUAwsc?si=C-8Fn-011012x7xO","m2b-eLtgjJU?si=W6bmWW6VsYGxC3jj"];
let currentIndex = 0;

function loadYouTubeVideo(videoId, containerId) {
    const videoContainer = document.getElementById(containerId);
    const videoIframe = document.createElement("iframe");
    videoIframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);
    videoIframe.setAttribute("frameborder", "0");
    videoIframe.setAttribute("allowfullscreen", "");
    videoContainer.appendChild(videoIframe);
}
setTimeout(() => {
    loadYouTubeVideo(videoIds[0], "youtube-video-1");
}, 5000);
setTimeout(() => {
    loadYouTubeVideo(videoIds[1], "youtube-video-2");
}, 5000);
// video placeholder end
//============================================================================================