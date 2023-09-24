// chat-ui/script.js
const socket = io('http://localhost:3000', { transports: ['websocket'] });

const chat = document.getElementById('chat');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');

// Function to send a message
function sendMessage() {
    const message = messageInput.value;
    if (message) {
        socket.emit('chat message', { text: message, isOutgoing: true });
        messageInput.value = '';
    }
}

// Send message when Enter key is pressed
messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent Enter from creating a new line
        sendMessage(); // Call the sendMessage function
    }
});

sendButton.addEventListener('click', () => {
    sendMessage(); // Call the sendMessage function when the send button is clicked
});

socket.on('chat message', (data) => {
    const message = data.text;
    const isOutgoing = data.isOutgoing;

    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    if (isOutgoing) {
        messageElement.classList.add('outgoing-message');
    } else {
        messageElement.classList.add('incoming-message');
    }

    messageElement.textContent = message;
    chat.appendChild(messageElement);
});
