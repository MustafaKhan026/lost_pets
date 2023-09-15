document.addEventListener("DOMContentLoaded", function () {
    const chatMessages = document.getElementById("chat-messages");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");

    // Simulated messages array (replace with actual backend implementation)
    const messages = [];

    // Function to add a message to the chat
    function addMessage(message, sender) {
        const messageElement = document.createElement("div");
        messageElement.className = "message";
        messageElement.textContent = `${sender}: ${message}`;
        chatMessages.appendChild(messageElement);
    }

    // Function to send a message
    function sendMessage() {
        const message = messageInput.value;
        if (message) {
            // Simulated sending (replace with actual sending code)
            messages.push({ message, sender: "You" });

            // Add the message to the chat
            addMessage(message, "You");

            // Clear the input field
            messageInput.value = "";
        }
    }

    // Event listener for sending a message
    sendButton.addEventListener("click", sendMessage);

    // Simulated receiving messages (replace with actual receiving code)
    setInterval(function () {
        if (messages.length > 0) {
            const receivedMessage = messages.shift();
            addMessage(receivedMessage.message, receivedMessage.sender);
        }
    }, 2000); // Simulated receive interval (2 seconds)
});
