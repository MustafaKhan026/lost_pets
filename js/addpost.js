const map = L.map('map').setView([0, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    let marker;
    map.on('click', (e) => {
        if (marker) {
            map.removeLayer(marker);
        }

        marker = L.marker(e.latlng).addTo(map);

        document.getElementById('markerLat').value = e.latlng.lat;
        document.getElementById('markerLng').value = e.latlng.lng;
    });
    document.getElementById('submit-button').addEventListener('click', async () => {
        const formData = new FormData(document.getElementById('lost-pet-form'));
        console.log([...formData.entries()]);

        try {
            const response = await fetch('http://localhost:3030/api/lostpet/create', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('Data submitted successfully!');
                window.location.href = 'home.html';

            } else {
                alert('Error submitting data.');
                console.log("response",response)
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });












