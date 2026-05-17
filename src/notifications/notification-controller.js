import { createNotification } from "./notification-views.js";

export const notificationsController = (notificationsContainer) => {
    const showNotification = (message, type) => {
        const newNotification = document.createElement('div')
        newNotification.innerHTML = createNotification(message, type)
        notificationsContainer.appendChild(newNotification)
    
            setTimeout(() => {
                newNotification.remove()
            }, 5000);
    }
    // globalizo un evento para los errores, carga, etc
    window.addEventListener('showNotification', (event) => {
        const {message, type} = event.detail; //destructuring para obtener la info
        showNotification(message, type);
    });

    return {
        showNotification
    }
}