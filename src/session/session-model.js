import { getToken } from "../utils/session.js";

export const getLoggedUserInfo = async () => {
    const url = 'http://localhost:8000/auth/me';
    const token = getToken(); // utilidad en lugar de acceder a localStorage aca 

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });

    if (!response.ok) {
        throw new Error('No se pudo obtener la información del usuario');
    }

    return await response.json();
}