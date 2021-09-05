const images = [
  "0.jpg",
  "1.jpg",
  "3.jpg",
  "4.png",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.png",
  "10.jpg",
  "11.jpg",
];

let chosenImage;
const bgImage = document.createElement("img");
bgImage.classList.add("bg-image");

function initialize() {
  handleResizeBgImage();
  changeBgImage();
}

function handleResizeBgImage() {
  bgImage.style.width = `${document.body.clientWidth}px`;
  bgImage.style.height = `${document.body.clientHeight}px`;
}

function changeBgImage() {
  chosenImage = images[Math.floor(Math.random() * images.length)];
  bgImage.src = `img/${chosenImage}`;
  setTimeout(changeBgImage, 3000);
}

initialize();
window.addEventListener("resize", handleResizeBgImage);

document.body.prepend(bgImage);
