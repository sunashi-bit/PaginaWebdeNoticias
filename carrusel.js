
        
const carouselContainer = document.querySelector('.carousel-container');
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;
let currentIndex = 0;

function moveToNextImage() {
    currentIndex = (currentIndex + 1) % totalImages; // Move to the next index
    const offset = -currentIndex * 100; // Calculate the offset
    carouselContainer.style.transform = `translateX(${offset}%)`; // Apply the transformation
}

// Change image every 3 seconds (3000 ms)
setInterval(moveToNextImage, 3000);
