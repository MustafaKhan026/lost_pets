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
        const postDiv = document.createElement('div');
        postDiv.classList.add('card'); // Add a class for styling in your CSS

        postDiv.innerHTML = `
        <div class="card">
        <div class="topContainer">
            <div class="topContainer-imageContainer">
                <img src=${pet.image_url} alt="${pet.pet_name}" class="imageContainer-style"/>
            </div>
            <div class="topContainer-infoContainer">
                <div class="infoContainer-textContainer">
                    <h4>Name</h4>
                    <h4>:</h4>
                    <h4>${pet.pet_name}</h4>
                </div>
                <div class="infoContainer-textContainer">
                    <h4>Species</h4>
                    <h4>:</h4>
                    <h4>${pet.species}</h4>
                </div>
                <div class="infoContainer-textContainer">
                    <h4>Breed</h4>
                    <h4>:</h4>
                    <h4>${pet.breed}</h4>
                </div>
                <div class="infoContainer-textContainer">
                    <h4>Color</h4>
                    <h4>:</h4>
                    <h4>${pet.color}</h4>
                </div>
                <div class="infoContainer-textContainer">
                    <h4>Age</h4>
                    <h4>:</h4>
                    <h4> ${pet.age}</h4>
                </div>
                <div class="infoContainer-textContainer">
                    <h4>Personality</h4>
                    <h4>:</h4>
                    <h4>${pet.personality}</h4>
                </div>
            </div>
        </div>
        <div class="middleContainer">
            <div class="middleContainer-innerContainer">
                <h4 class="lostLocationText">Lost location :  ${pet.last_location}</h4>
            </div>
        </div>
        <div class="bottomContainer">
            <div class="bottomContainer-innerContainer">
                <div class="bottomContainer-innerContainer-textContainer">
                    <h3>Medical Conditions</h3>
                    <h3>:</h3>
                    <h3> ${pet.medical_conditions}</h3>
                </div>
                <div class="bottomContainer-innerContainer-textContainer">
                    <h3>Distinguish marks</h3>
                    <h3>:</h3>
                    <h3>${pet.distinguish_marks}</h3>
                </div>
                
            </div>
        </div>
    </div> 
        `;

        resultsDiv.appendChild(postDiv);
    });
}
