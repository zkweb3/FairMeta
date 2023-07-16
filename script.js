document.addEventListener("DOMContentLoaded", function() {
  const text1 = document.getElementById("text1");
  const text2 = document.getElementById("text2");
  const logo = document.getElementById("logo");

  setTimeout(function() {
    text1.classList.add("fade-in");
  }, 500);

  new fullpage('#fullpage', {
    anchors: ['fair', 'coming'],
    sectionsColor: ['#200c00', '#200c00'],
    controlArrows: false,
    scrollingSpeed: 1000,
    afterLoad: function(origin, destination, direction) {
      if (destination.index === 1 && !text2.classList.contains("fade-in")) {
        text2.classList.add("fade-in");
        setTimeout(function() {
          logo.style.opacity = 1;
        }, 500);
      }
    }
  });

  logo.addEventListener("click", function() {
    window.open("https://twitter.com/FairMeta_xyz", "_blank");
  });
});
