import { signupController } from "./src/signup/signup-controller.js";
import { spinnerController } from "./src/spinner/spinner-controller.js";
import { notificationsController } from "./src/notifications/notification-controller.js";

const signupForm = document.querySelector('#signup-form');
const notificationsContainer = document.querySelector('.notifications-container');
const spinnerContainer = document.querySelector('.spinner-container');

notificationsController(notificationsContainer);
spinnerController(spinnerContainer);

signupController(signupForm);
