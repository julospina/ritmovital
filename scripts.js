document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subscribeForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        alert(`Gracias por suscribirte, ${email}!`);
    });

    const carouselImages = document.querySelector('.carousel-images');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let index = 0;

    function updateCarousel() {
        const totalImages = carouselImages.children.length;
        const offset = -index * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : carouselImages.children.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        index = (index < carouselImages.children.length - 1) ? index + 1 : 0;
        updateCarousel();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var profileImg = document.querySelector('.profile-img');
    var bioPopup = document.querySelector('.bio-popup');

    profileImg.addEventListener('click', function() {
        if (bioPopup.style.display === 'block') {
            bioPopup.style.display = 'none';
        } else {
            bioPopup.style.display = 'block';
        }
    });

    document.addEventListener('click', function(event) {
        if (!profileImg.contains(event.target) && !bioPopup.contains(event.target)) {
            bioPopup.style.display = 'none';
        }
    });
});
