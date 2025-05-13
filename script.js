const images = [
  "images/slide1.jpg",
  "images/slide2.jpg",
  "images/slide3.jpg",
  "images/slide4.jpg"
];

let current = 0;
const imgElement = document.getElementById("slideshow");

function showNextImage() {
  current = (current + 1) % images.length;
  imgElement.style.opacity = 0;

  setTimeout(() => {
    imgElement.src = images[current];
    imgElement.style.opacity = 1;
  }, 500);
}

setInterval(showNextImage, 3000); // Change image every 3 seconds