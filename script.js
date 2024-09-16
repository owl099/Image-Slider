let currentSlide = 0;
const images = document.querySelectorAll('.slider-image');
const dotsContainer = document.querySelector('.dots-container');

// Create dots for each image
images.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active-dot');
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

// Function to display the current slide and update active indicators
function showSlide(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
    updateIndicators(index); // Update dots for active slide
    updateBackgroundImage(index); // Change background image
}

// Auto slide feature (optional)
function autoSlide() {
    setInterval(() => {
        nextSlide();
    }, 5000); // Change every 5 seconds
}

// Update dot indicators based on the current slide
function updateIndicators(index) {
    dots.forEach((dot, i) => {
        dot.classList.remove('active-dot');
        if (i === index) {
            dot.classList.add('active-dot'); // Highlight the active dot
        }
    });
}

// Change background image
function updateBackgroundImage(index) {
    const currentImageSrc = images[index].src;
    document.body.style.setProperty('--background-image', `url(${currentImageSrc})`);
}

// Navigation for next and previous buttons
function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    showSlide(currentSlide);
}

// Event listeners for the buttons
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Dot navigation (clicking on a dot will jump to that slide)
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
    });
});

// Initial slide setup
showSlide(currentSlide);
updateBackgroundImage(currentSlide); // Set background image on load
autoSlide(); // Start auto-slide if needed
