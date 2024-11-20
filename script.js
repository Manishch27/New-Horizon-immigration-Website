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

    // Toggle mobile menu

    document.getElementById('menu-toggle').addEventListener('click', function() {
        const menu = document.getElementById('mobile-menu-2');
        menu.classList.toggle('hidden');
    });


    //  Counter in stats

    document.addEventListener("DOMContentLoaded", () => {
        const counters = document.querySelectorAll("dt[data-target]");

        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            const speed = target > 1000 ? 60 : 50;

            const updateCounter = () => {
                let value = +counter.innerText.replace('+', '').replace(/,/g, ''); // Remove symbols
                const increment = Math.ceil(target / speed);

                if (value < target) {
                    value += increment;
                    
                    if (value >= 100000) {
                        counter.innerText = "100k+";
                    }
                    } else if (value >= 10000) {
                        counter.innerText = `${Math.floor(value / 1000)}K+`;
                    } else if (value >= 1000) {
                        counter.innerText = `${Math.floor(value / 1000)}K+`;
                    } else {
                        counter.innerText = `${value.toLocaleString()}+`;
                    }
                    
                    setTimeout(updateCounter, 30);
                } else {
                    // Final display
                    counter.innerText = target >= 100000 ? "100k+" : `${target.toLocaleString()}+`;
                }
            };

            updateCounter();
        });
    });
