const button = document.querySelector("#clickMe");
const heart = document.querySelector("#bm");
const reset = document.querySelector("#reset");
const confetti = document.querySelector("#spark");

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

// lottie.setQuality(low);

button.addEventListener("click", function () {
  lottie.setQuality(1),
    animation.goToAndPlay(0),
    document.getElementById("like").style.display = "none",
    heart.style.display = "block"
});

animation.addEventListener("complete", function () {
  animation.goToAndStop(2000),
    reset.style.display = "block";
});

reset.addEventListener("mousedown", function () {
    heart.style.display = "none",
    document.getElementById("like").style.display = "block",
    reset.style.display = "none",
    confetti.style.display = "block",
    lottie.setQuality(1),
    spark.goToAndPlay(0)
});