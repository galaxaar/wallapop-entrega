import { getLoggedUserInfo } from "./session-model.js";
import { buildAuthenticatedSession, buildUnauthenticatedSession } from "./session-view.js";
import { isLoggedIn, removeToken } from "../utils/session.js";

export const sessionController = async (sessionContainer) => {
    if (isLoggedIn()) {
        try{
            const { username } = await getLoggedUserInfo();
            sessionContainer.innerHTML = buildAuthenticatedSession(username);

            const closeSessionButton = sessionContainer.querySelector('button');
            closeSessionButton.addEventListener('click', () => {
                removeToken();
                sessionController(sessionContainer); 
            });
        } catch (error) {
            removeToken(); 
            sessionContainer.innerHTML = buildUnauthenticatedSession();
        } 
    } else {
        sessionContainer.innerHTML = buildUnauthenticatedSession(); 
    }
}