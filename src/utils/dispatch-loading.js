import { EVENTS } from "../constants/events.js";

export const dispatchLoading = (isLoading) => {
    const event = isLoading ? EVENTS.LOADING_STARTED : EVENTS.LOADING_FINISHED;
    window.dispatchEvent(new CustomEvent(event));
}