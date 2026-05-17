import { loginUser } from "./login-model.js";
import { dispatchNotification } from "../utils/dispatch-notifications.js";
import { dispatchLoading } from "../utils/dispatch-loading.js";

export const loginController = (loginForm) => {
    loginForm.addEventListener('submit', async(event) => {
        event.preventDefault();

        const form = new FormData(loginForm);
        const email = form.get('email');
        const password = form.get('password');

        if(!email || !password){
            dispatchNotification("Rellena todos los campos", "error");
            return;
        }
        try {
            dispatchLoading(true);
            await loginUser(email, password);
            dispatchNotification("Sesión iniciada correctamente", "success");

            setTimeout(() => {
                window.location = '/'; //redirecciono al inicio
            }, 1500);

        } catch (error) {
            dispatchNotification(error.message, "error");
        } finally {
            dispatchLoading (false)
        }
    });
}