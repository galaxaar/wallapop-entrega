import { EVENTS } from "../constants/events.js";

export const spinnerController = (spinnerContainer) => {
    window.addEventListener(EVENTS.LOADING_STARTED, () => {
        spinnerContainer.innerHTML = `
        <div class="text-center">
            <div class="spinner-border" role="status">
                <span class="sr-only"> Cargando... </span>
            </div>
        </div>
        `;
    });

    window.addEventListener(EVENTS.LOADING_FINISHED, () => {
        spinnerContainer.innerHTML = '';
    });
}