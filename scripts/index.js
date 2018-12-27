var button = document.getElementById("clickMe");

var heartAnim = lottie.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: './scripts/heart.json' // the path to the animation json
});

var santaAnim = lottie.loadAnimation({
  container: document.getElementById('santa'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: './scripts/santa.json' // the path to the animation json
});

button.addEventListener("click", function () {
  lottie.play(),
  santaAnim.play(),
  document.getElementById("like").innerHTML = "";
});

animation.addEventListener("complete", function () {
  lottie.goToAndStop(2100)
});


function displayHeart() {
  document.getElementById("bm").style.display = "block",
  document.getElementById("noClick").style.display = "none";
}