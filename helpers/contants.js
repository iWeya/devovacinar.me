import messages from './messages'

export function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}
