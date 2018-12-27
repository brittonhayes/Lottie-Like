var button = document.getElementById("clickMe");

var heartAnim = lottie.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: './scripts/heart.json' // the path to the animation json
});

var chinaAnim = lottie.loadAnimation({
  container: document.getElementById('china'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: './scripts/china.json' // the path to the animation json
});

button.addEventListener("click", function () {
  lottie.play(),
  document.getElementById("like").innerHTML = "";
});

animation.addEventListener("complete", function () {
  lottie.goToAndStop(2100)
});


function displayHeart() {
  document.getElementById("bm").style.display = "block",
  document.getElementById("noClick").style.display = "none";
}