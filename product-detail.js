import { notificationsController } from "./src/notifications/notification-controller.js";
import { spinnerController } from "./src/spinner/spinner-controller.js";
import { sessionController } from "./src/session/session-controller.js";
import { productDetailController } from "./src/product-detail/product-detail-controller.js";

const productDetailContainer = document.querySelector('.product-detail-container');
const notificationsContainer = document.querySelector('.notifications-container');
const spinnerContainer = document.querySelector('.spinner-container');
const sessionContainer = document.querySelector('.session-container');

notificationsController(notificationsContainer);
spinnerController(spinnerContainer);
sessionController(sessionContainer);

productDetailController(productDetailContainer);