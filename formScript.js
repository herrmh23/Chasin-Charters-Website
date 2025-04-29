const form = document.getElementById('bookingForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('successMessage').style.display = 'block';
    form.reset();
});