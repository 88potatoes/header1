const navSlide = () => {
    const nav = document.querySelector('nav');
    const burger = document.querySelector('.burger');
    const navText = document.querySelectorAll('.nav-links li a');

    burger.addEventListener('click', () => {
        // Sliding nav bar
        nav.classList.toggle('nav-active');
        
        // Text fading in
        navText.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navFadeItems 0.5s ease ${index / 7 + 1}s 1 forwards`;
            }
        });
    });
};

navSlide();