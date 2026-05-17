import { createUser } from "./signup-model.js";
import { dispatchNotification } from "../utils/dispatch-notifications.js";

export const signupController = (signupForm) => {

    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault(); //evito comportamiento por defecto de reinicio


        const form = new FormData(signupForm) //extraigo la informacion del formulario con FormData
        const email = form.get('email')
        const password = form.get('password')
        const confirmPassword = form.get('confirm-password')

        //validar email con expresion regular y validar que las contraseñas sean coincidentes

        const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const emailValid = emailRegExp.test(email)


        //si no es valido el email...
        if (!emailValid) {
            dispatchNotification("El email no es válido", "error");
            return
        }
        // meto aqui la comprobacion ya que la comprobacion nativa de html no me est'a permitiendo leer mis notificaciones
        if (password.length < 8) {
            dispatchNotification("La contraseña debe tener al menos 8 caracteres", "error");
            return;
        }

        //si las passwords no coinciden
        if (password !== confirmPassword) {
            dispatchNotification("Las contraseñas no coinciden", "error");
            return;
        }

        //intento de registro (gestion de estados)

        try {
            await createUser(email, password)
            dispatchNotification("Te has registrado correctamente", "success");

            setTimeout(() => {
                window.location = '/login.html'; 
            }, 1500);
        } catch (error) {
            dispatchNotification(error.message, "error");
        }
    });
};

