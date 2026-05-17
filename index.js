import { notificationsController } from "./src/notifications/notification-controller.js";
import { spinnerController } from "./src/spinner/spinner-controller.js";
import { sessionController } from "./src/session/session-controller.js";
import { productsListController } from "./src/product-list/product-list-controller.js";
import { isLoggedIn } from "./src/utils/session.js";

const productsContainer = document.querySelector('.products-container');
const notificationsContainer = document.querySelector('.notifications-container');
const sessionContainer = document.querySelector('.session-container');
const spinnerContainer = document.querySelector('.spinner-container');
const createProductContainer = document.querySelector('.create-product-container');


notificationsController(notificationsContainer);
spinnerController(spinnerContainer);
sessionController(sessionContainer);

if (isLoggedIn()){ 
    createProductContainer.innerHTML = `
        <a href="create-product.html" class="btn btn-primary">Crear anuncio</a>
    `;
}

productsListController(productsContainer);
