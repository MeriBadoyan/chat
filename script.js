const chatMessages = document.getElementById('chat-messages')
const sendButton = document.getElementById('send-button')
const messageInput = document.getElementById('message-input')
const errorMessage = document.getElementById('error-message')


const firstName = prompt('Enter your name')
const date = new Date
const sendTime = date.toLocaleString("en-GB", { year: "numeric", month: '2-digit', day: '2-digit' })

const sendMessage = () => {
    const message = messageInput.value.trim()

    if (!message) {
        errorMessage.innerHTML = 'Enter a message!'
        errorMessage.style.display = 'block'

        setTimeout(() => {
            errorMessage.style.display = 'none'
        }, 3000)

        return
    } else {
        errorMessage.style.display = 'none'
    }

    const messageEl = document.createElement('div')
    messageEl.classList.add('chat-message')
    messageEl.textContent = message

    const sender = document.createElement('p')
    sender.classList.add('sender')
    sender.textContent = firstName + ' - ' + sendTime

    chatMessages.appendChild(sender)
    chatMessages.appendChild(messageEl)

    messageInput.value = ''

    chatMessages.scrollTop = chatMessages.scrollHeight
}

sendButton.addEventListener('click', sendMessage)

messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage()
    }
})
