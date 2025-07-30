const images = [
    "images/slide1.jpg",
    "images/slide2.jpg",
    "images/slide3.jpg"
];

let current = 0;

function changeImage() {
    document.getElementById("slideshow").src = images[current];
    current = (current + 1) % images.length;
}

setInterval(changeImage, 3000);
