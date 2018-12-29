var button = document.getElementById("clickMe");
var reset = document.querySelector("#reset");

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
    document.getElementById("bm").style.display = "block"
});


animation.addEventListener("complete", function () {
  animation.goToAndStop(2000),
  reset.style.display = "block";
});

// animation.getDuration(){
//   console.log(getDuration);
// }

reset.addEventListener("mousedown", function () {
  document.getElementById("like").innerHTML = "<strong>like</strong>",
    document.getElementById("bm").style.display = "none",
    reset.style.display = "none",
    spark.goToAndPlay(0),
    lottie.loadAnimation()
});