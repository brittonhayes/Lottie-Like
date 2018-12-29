var button = document.querySelector("#clickMe");
var heart = document.querySelector("#bm");
var reset = document.querySelector("#reset");
var confetti = document.querySelector("#spark");

var animation = lottie.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: './scripts/heart.json' // the path to the animation json
});

var spark = lottie.loadAnimation({
  container: document.getElementById('spark'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: './scripts/confetti.json' // the path to the animation json
});

button.addEventListener("click", function () {
  animation.goToAndPlay(0),
    document.getElementById("like").innerHTML = "",
    heart.style.display = "block"
});

animation.addEventListener("complete", function () {
  animation.goToAndStop(2000),
    reset.style.display = "block";
});

reset.addEventListener("mousedown", function () {
  document.getElementById("like").innerHTML = "<strong>like</strong>",
    heart.style.display = "none",
    reset.style.display = "none",
    confetti.style.display = "block",
    spark.goToAndPlay(0)
});