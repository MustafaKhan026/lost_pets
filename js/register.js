const email = document.getElementById('email');
const password = document.getElementById('password');

document.getElementById('signin-button').addEventListener('click', async () => {
    const data = {
        email: email.value,
        password: password.value
    };

    try {
        const response = await fetch('http://localhost:3030/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Set the content type to JSON
            },
            body: JSON.stringify(data) // Stringify the data object
        });

        if (response.ok) {
            alert('Data submitted successfully!');
            window.location.href = 'login.html'
            console.log("resopnse",response)
        } else {
            alert('Error submitting data.');
            console.log("response", response);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
