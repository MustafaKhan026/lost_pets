document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");
    const errorMessage = document.getElementById("error-message");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting by default

        // Get values from form fields
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Basic password confirmation check
        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match!";
        } else {
            // Reset error message if no errors
            errorMessage.textContent = "errrrrorrr";

            // Simulate a successful registration (replace this with your actual registration code)
            // For this example, we'll navigate to the home screen after a short delay
            setTimeout(function () {
                alert("Registration successful!"); // Display a success message (you can replace this with actual form submission)
                window.location.href = 'home.html'; // Navigate to the home screen
            }, 1000); // Delay for 1 second (adjust as needed)
        }
    });
});
