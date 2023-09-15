const cardButtons = document.querySelectorAll('.card-button');

cardButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
        window.location.href = `carddetails.html?card=${index + 1}`;
    });
});

const reportButtons = document.querySelectorAll('.buttonContainer-reportButton');

reportButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
        window.location.href = `reportPet.html?card=${index + 1}`;
    });
});

// const connectButtons = document.querySelectorAll('.buttonContainer-connectButton');

// connectButtons.forEach((button, index) => {
//     button.addEventListener('click', function () {
//         window.location.href = `connectUser.html?card=${index + 1}`;
//     });
// });
const connectButtons = document.querySelectorAll('.buttonContainer-connectButton');

connectButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
        const url = `connectUser.html?card=${index + 1}`;
        window.open(url, '_blank'); // '_blank' opens the link in a new tab/window
    });
});
