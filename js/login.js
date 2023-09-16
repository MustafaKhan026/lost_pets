const email = document.getElementById('email');
const password = document.getElementById('password');

document.getElementById('signin-button').addEventListener('click', async () => {
    const data = {
        email: email.value,
        password: password.value
    };

    try {
        const response = await fetch('http://localhost:3030/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response) {
            alert('Data submitted successfully!');
            const responseData = await response.json();
            console.log('Response Data:', responseData);
            window.location.href = 'home.html';
        } else {
            alert('Error submitting data.');
            console.log("response", response);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
