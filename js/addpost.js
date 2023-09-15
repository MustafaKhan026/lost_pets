const map = L.map('map').setView([0, 0], 2); // Set the initial view and zoom level
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Initialize the marker
    let marker;
    map.on('click', (e) => {
        // Remove the existing marker, if any
        if (marker) {
            map.removeLayer(marker);
        }

        // Add a new marker at the clicked location
        marker = L.marker(e.latlng).addTo(map);

        // Update the hidden input fields with marker coordinates
        document.getElementById('markerLat').value = e.latlng.lat;
        document.getElementById('markerLng').value = e.latlng.lng;
    });

    // Handle form submission when the button is clicked
    document.getElementById('submit-button').addEventListener('click', async () => {
        const formData = new FormData(document.getElementById('lost-pet-form'));
        // console.log("formdata",formData)
        console.log([...formData.entries()]);

        try {
            const response = await fetch('http://localhost:3030/api/lostpet/create', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('Data submitted successfully!');
            } else {
                alert('Error submitting data.');
                console.log("response",response)
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });












