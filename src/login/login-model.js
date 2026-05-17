import { saveToken } from "../utils/session.js";

export const loginUser = async (email, password) => {
    const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: email,
            password: password
        })
    });

    if (!response.ok) {
        const info = await response.json();
        throw new Error(info.message);
    }

    const data = await response.json();
    console.log('respuesta del login:', data);
    saveToken(data.accessToken);
}