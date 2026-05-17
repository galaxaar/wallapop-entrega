import { createProduct } from "./create-product-model.js";
import { dispatchNotification } from "../utils/dispatch-notifications.js";
import { dispatchLoading } from "../utils/dispatch-loading.js";
import { isLoggedIn } from "../utils/session.js";

export const createProductController = (createProductForm) => {

    if (!isLoggedIn()) {
        dispatchNotification("Se necesita iniciar sesión para crear un anuncio", "error");
        setTimeout(() => {
            window.location = '/';
        }, 1500)
        return;
    }

    createProductForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const form = new FormData(createProductForm);
        const name = form.get('name');
        const description = form.get('description');
        const price = form.get('price');
        const type = form.get('type');
        const imageFile = form.get('image');
        const validImage = imageFile && imageFile.size > 0 ? imageFile : null;

        if(!name || !description || !price || !type) {
            dispatchNotification("Rellena todos los campos obligatorios (*)", "error");
            return;
        }
        if (price <= 0){
            dispatchNotification("El precio debe ser mayor que 0", "error");
            return;
        }
        
        try {
            dispatchLoading(true);
            await createProduct(name, description, price, type, validImage);
            dispatchNotification("Anuncio creado correctamente", "success");

            setTimeout(() => {
                window.location = '/';
            }, 1500);
        } catch (error) {
            dispatchNotification(error.message, "error");
        } finally {
            dispatchLoading(false);
        }
    });
}