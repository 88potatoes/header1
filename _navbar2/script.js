const navSlide = () => {
    const navigation = document.querySelector('.navigation');
    const burger = document.querySelector('.burger');
    const navText = document.querySelectorAll('.navigation li');

    burger.addEventListener('click', () => {
        // sliding nav bar
        navigation.classList.toggle('nav-active');

        // text fade
        navText.forEach((text, index) => {
            if (text.style.animation) {
                text.style.animation = "";
            } else {
                text.style.animation = `textFade 0.5s ease forwards ${index / 5}s`;
            }
        });
    });
};

navSlide();