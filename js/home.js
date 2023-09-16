const map = L.map('map').setView([51.505, -0.09], 13); // Set the initial center and zoom level

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        // Fetch data from the server and populate the HTML and map
        fetch('http://localhost:3030/api/lostpet/allposts')
    .then(response => response.json())
    .then(data => {
        console.log("data", data);
        const lostPetsList = document.getElementById('lost-pets-list');

        data.forEach(pet => {
            // Create a card for each lost pet
            const card = document.createElement('div');
            card.className = 'lost-pet-card';




            

            card.innerHTML =`
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
                    <div id="map-${pet._id}" class="innerContainer-mapContainer"></div>
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
                    <div class="bottomContainer-innerContainer-buttonContainer">
                        <button class="buttonContainer-reportButton">
                            <a href="reportPet.html?email=${pet.pet_owner_email}">Report</a>
                        </button>
                        <button class="buttonContainer-connectButton">Connect with owner</button>
                    </div>
                    
                </div>
            </div>
        </div> 
            ` 
            lostPetsList.appendChild(card);

            // Create a map for each pet's location
            const petMap = L.map(`map-${pet._id}`).setView([pet.latitude, pet.longitude], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(petMap);

            // Create a marker for the pet's location
            L.marker([pet.location.coordinates[1], pet.location.coordinates[0]])
                .addTo(petMap)
                .bindPopup(`<h2>${pet.pet_name}</h2><p>Species: ${pet.species}</p><p>Breed: ${pet.breed}</p>`);
        });
    })
    .catch(error => console.error(error));