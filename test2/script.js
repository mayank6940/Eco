const slider = document.querySelector('.slider');
let startX;
let currentX = 0;

slider.addEventListener('touchstart', handleTouchStart);
slider.addEventListener('touchmove', handleTouchMove);

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    const x = event.touches[0].clientX;
    const deltaX = startX - x;

    currentX += deltaX;

    // Limit the sliding to the width of one slide
    const slideWidth = slider.clientWidth;
    const maxSlideX = (slider.children.length - 1) * slideWidth;
    currentX = Math.max(0, Math.min(currentX, maxSlideX));

    slider.style.transform = `translateX(-${currentX}px)`;

    startX = x;
}

