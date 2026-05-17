import { notificationsController } from "./src/notifications/notification-controller.js";
import { spinnerController } from "./src/spinner/spinner-controller.js";
import { sessionController } from "./src/session/session-controller.js";
import { createProductController } from "./src/create-product/create-product-controller.js";

const createProductForm = document.querySelector('#create-product-form');
const notificationsContainer = document.querySelector('.notifications-container');
const spinnerContainer = document.querySelector('.spinner-container');
const sessionContainer = document.querySelector('.session-container');

notificationsController(notificationsContainer);
spinnerController(spinnerContainer);
sessionController(sessionContainer);

createProductController(createProductForm);