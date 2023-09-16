let lat;
let long;
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
        lat = document.getElementById('markerLat').value = e.latlng.lat;
        long = document.getElementById('markerLng').value = e.latlng.lng;
        console.log(lat,long)
    });

    // Handle form submission when the button is clicked
    document.getElementById('submit-button').addEventListener('click', async () => {
        const urlParams = new URLSearchParams(window.location.search)
        const owner_email = urlParams.get('email')
        console.log(owner_email)
        const formData = new FormData(document.getElementById("report-pet-form"))
        
        // Add latitude and longitude to formData
        formData.append('markerLat', lat);
        formData.append('markerLng', long);
        
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
    
        const requestData = {
            owner_email: owner_email,
            formData: formDataObject
        };
    
        try {
            const response = await fetch('http://localhost:3030/api/lostpet/report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData), // Convert data to JSON string
            });
    
            if (response.ok) {
                alert('Data submitted successfully!');
                const responseData = await response.json();
                console.log('Response Data:', responseData);
                window.location.href = 'home.html';

            } else {
                alert('Error submitting data.');
                const responseData = await response.json();
                console.log('Response Data:', responseData);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
    
    

