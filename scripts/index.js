var button = document.getElementById("clickMe");

var animation = lottie.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: './scripts/heart.json' // the path to the animation json
});

button.addEventListener("click", function () {
  lottie.play(),
  document.getElementById("like").innerHTML = "";
});

animation.addEventListener("onComplete", function () {
  alert("Hello World!");
});