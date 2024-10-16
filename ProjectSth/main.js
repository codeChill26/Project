function initGallery() {
    const images = document.querySelectorAll('.gallery-image');

    // Add mouse event listeners
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            console.log('Mouse over image:', img.alt);
        });
        img.addEventListener('mouseleave', () => {
            console.log('Mouse left image:', img.alt);
        });

        // Add focus and blur event listeners
        img.addEventListener('focus', () => {
            console.log('Image focused:', img.alt);
        });
        img.addEventListener('blur', () => {
            console.log('Image blurred:', img.alt);
        });
    });
}
