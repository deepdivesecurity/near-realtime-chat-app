const socket = io();

function sendMessage(e) {
    e.preventDefault();
    const messageInput = document.getElementById('message');
    if (messageInput.value) {
        socket.emit('message', messageInput.value);
        messageInput.value = '';
    }
    messageInput.focus();
}

document.querySelector('form').addEventListener('submit', sendMessage);

socket.on('message', (data) => {
    const li = document.createElement('li');
    li.textContent = data;
    document.querySelector('ul').appendChild(li);
});