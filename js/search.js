document.getElementById('searchForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent the form from actually submitting

    const locationFound = document.getElementById('location_found').value;

    try {
        const response = await fetch(`http://localhost:3030/api/lostpet/search/${locationFound}`);
        const data = await response.json();

        if (response.ok) {
            console.log("data",data)
            displayResults(data.posts);
        } else {
            console.error(data.message);
        }
    } catch (error) {
        console.error(error);
    }
});

function displayResults(posts) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (posts.length === 0) {
        resultsDiv.textContent = 'No matching posts found.';
        return;
    }

    posts.forEach(pet => {
        // const postDiv = document.createElement('div');
        // postDiv.classList.add('card'); // Add a class for styling in your CSS

        resultsDiv.innerHTML = `
        <div class="card">
        <div class="upperContainer">
            <div class="imageContainer">
                <img src=${pet.image_url} alt="pet image">
            </div>
            <div class="detailsContainer">
                <p>Breed :${pet.breed} </p>
                <p>Species : ${pet.species} </p>
                <p>Weight : ${pet.weight}</p>
                <p>Color : ${pet.pet_color}</p>
            </div>
        </div>
        <div class="lowerContainer">
            <p>Distinguish Marks : ${pet.distinguish_marks}</p>
            <p>Location Found :${pet.location_found} </p>
        </div>
    </div>
        `;

        // resultsDiv.appendChild(postDiv);
    });
}
