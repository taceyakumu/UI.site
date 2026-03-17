// Background Slideshow Logic
document.querySelectorAll('.slideshow-container').forEach(container => {
    const slides = container.querySelectorAll('.slide');
    let currentIndex = 0;

    // Immediately show the first slide
    if (slides.length > 0) {
        slides[0].classList.add('active');
    }

    setInterval(() => {
        if (slides.length < 2) return;

        // Get the current and next slide
        const currentSlide = slides[currentIndex];
        const nextIndex = (currentIndex + 1) % slides.length;
        const nextSlide = slides[nextIndex];

        // Current slide starts leaving
        currentSlide.classList.add('leaving');
        currentSlide.classList.remove('active');
        
        // Next slide becomes active
        nextSlide.classList.remove('leaving'); // Reset if it was leaving
        nextSlide.classList.add('active');

        // Clean up the leaving class after the transition is over
        setTimeout(() => {
            currentSlide.classList.remove('leaving');
        }, 5000); // Should match the CSS transition duration

        // Update index for the next iteration
        currentIndex = nextIndex;
    }, 5000); // Change image every 5 seconds
});

// Gallery Slideshow Logic
document.querySelectorAll('.gallery-slideshow-container').forEach(container => {
    const slides = container.querySelectorAll('.gallery-slide');
    let currentIndex = 0;

    // Immediately show the first slide
    if (slides.length > 0) {
        slides[0].classList.add('active');
    }

    setInterval(() => {
        if (slides.length < 2) return;

        // Get the current and next slide
        const currentSlide = slides[currentIndex];
        const nextIndex = (currentIndex + 1) % slides.length;
        const nextSlide = slides[nextIndex];

        // Make current slide leave
        currentSlide.classList.add('leaving');
        currentSlide.classList.remove('active');

        // Make next slide active
        // A small delay to ensure the leaving animation starts
        setTimeout(() => {
            nextSlide.classList.remove('leaving'); // Reset position
            nextSlide.classList.add('active');
        }, 50); // Small delay for smoother visual effect

        // Clean up the leaving class after the animation
        setTimeout(() => {
            currentSlide.classList.remove('leaving');
        }, 1500); // This should match the CSS transition duration for .gallery-slide

        // Update index
        currentIndex = nextIndex;

    }, 3000); // Change image every 3 seconds
});

// Typing Animation for "Welcome Home"
document.addEventListener('DOMContentLoaded', () => {
    const animatedTextContainer = document.getElementById('animated-text-container');
    if (animatedTextContainer) {
        const textToType = "Welcome Home";
        let index = 0;
        
        function type() {
            if (index < textToType.length) {
                animatedTextContainer.textContent += textToType.charAt(index);
                index++;
                setTimeout(type, 150); // Adjust typing speed here
            }
        }
        
        type();
    }
});