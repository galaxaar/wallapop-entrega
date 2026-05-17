import { EVENTS, NOTIFICATION_TYPES } from "../constants/events.js";

export const dispatchNotification = (message, type) => {
    const validTypes = Object.values(NOTIFICATION_TYPES);
    const notificationType = validTypes.includes(type) ? type : "info"; //si ponen un type que no existe se modifica a info igualmente

    const notificationEvent = new CustomEvent(EVENTS.SHOW_NOTIFICATION, {
        detail: {
            message: message,
            type: notificationType
        }
    });

    window.dispatchEvent(notificationEvent);
};