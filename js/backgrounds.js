const body = document.querySelector(".body");

const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

document.body.style.backgroundImage = `url(img/${chosenImg})`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";

// bgImg.src = `img/${chosenImg}`;
// document.body.appendChild(bgImg);
