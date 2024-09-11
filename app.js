document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('feedback-form');

    form.addEventListener('submit', function (event) {
        // Prevent the form from submitting the traditional way
        event.preventDefault();

        // Perform validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Simple email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If validation passes, you can handle form submission here
        // For now, just reset the form and show a success message
        form.reset();
        alert('Thank you for your feedback!');
    });
});
