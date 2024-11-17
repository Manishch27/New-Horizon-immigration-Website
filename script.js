        // let currentImageIndex = 0;
        // const images = document.querySelectorAll('.carousel-image');
        // const totalImages = images.length;
        // const carouselContainer = document.getElementById('carouselImages');
    
        // function showNextImage() {
        //     // Update the index to move images
        //     currentImageIndex = (currentImageIndex + 1) % totalImages;
    
        //     // Move the images by changing the transform property
        //     const offset = -100 * currentImageIndex; // Move to the left by 100% per image
        //     carouselContainer.style.transform = `translateX(${offset}%)`;
        // }
    
        // // Change image every 5 seconds
        // setInterval(showNextImage, 5000);





        // JavaScript to rotate images with fade transition
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;

    function showNextImage() {
        // Hide current image
        images[currentImageIndex].classList.remove('opacity-100');
        images[currentImageIndex].classList.add('opacity-0');

        // Update the index
        currentImageIndex = (currentImageIndex + 1) % totalImages;

        // Show the next image
        images[currentImageIndex].classList.remove('opacity-0');
        images[currentImageIndex].classList.add('opacity-100');
    }

    // Change image every 3 seconds
    setInterval(showNextImage, 5000);