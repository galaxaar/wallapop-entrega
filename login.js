import { notificationsController } from "./src/notifications/notification-controller.js";
import { spinnerController } from "./src/spinner/spinner-controller.js";
import { loginController } from "./src/login/login-controller.js";

const loginForm = document.querySelector('#login-form');
const notificationsContainer = document.querySelector('.notifications-container');
const spinnerContainer = document.querySelector('.spinner-container');

notificationsController(notificationsContainer);
spinnerController(spinnerContainer);

loginController(loginForm);