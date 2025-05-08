document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const username = document.getElementById('first');
    const password = document.getElementById('password');

    form.addEventListener('submit', (event) => {
        // Check if username or password is empty
        if (username.value.trim() === '' || password.value.trim() === '') {
            alert('Please fill out both the Username and Password fields.');
            event.preventDefault(); // Prevent form submission
        } else {
            alert('Login successful!');
        }
    });
});
