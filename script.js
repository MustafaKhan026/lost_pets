document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Redirect to the home screen (home.html) when the login button is clicked
    window.location.href = 'home.html';
});
