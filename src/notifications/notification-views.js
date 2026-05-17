export const createNotification = (message, type) => {
    return `<div class="notification ${type}">${message}</div>`
}