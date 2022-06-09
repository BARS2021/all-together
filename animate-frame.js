var images = new Array()
images = [
  "assets/artwork/frame1.jpg",
  "assets/artwork/frame2.jpg",
  "assets/artwork/frame3.jpg",
  "assets/artwork/frame4.jpg",
  "assets/artwork/frame5.jpg",
  "assets/artwork/frame6.png",
  "assets/artwork/frame7.jpg",
];
setInterval("animate()", 1000);
var x = 0;
function animate() {
  document.getElementById("photo-frame").src = images[x];
  x++;
  if (images.length == x) {
    x = 0;
  }
}
