document.addEventListener("DOMContentLoaded", function () {
    const chatMessages = document.getElementById("chat-messages");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const messages = [];

    function addMessage(message, sender) {
        const messageElement = document.createElement("div");
        messageElement.className = "message";
        messageElement.textContent = `${sender}: ${message}`;
        chatMessages.appendChild(messageElement);
    }

    function sendMessage() {
        const message = messageInput.value;
        if (message) {
            messages.push({ message, sender: "fred" });

            addMessage(message, "You");

            messageInput.value = "";
        }
    }

    sendButton.addEventListener("click", sendMessage);
    setInterval(function () {
        if (messages.length > 0) {
            const receivedMessage = messages.shift();
            addMessage(receivedMessage.message, receivedMessage.sender);
        }
    }, 2000);
});
