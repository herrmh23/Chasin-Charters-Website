const scrollArrow = document.getElementById('scrollArrow');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        scrollArrow.classList.add('hidden');
    } else {
        scrollArrow.classList.remove('hidden');
    }
});
