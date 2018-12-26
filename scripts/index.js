var button = document.getElementById("clickMe");

var animation = lottie.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: '/scripts/data.json' // the path to the animation json
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