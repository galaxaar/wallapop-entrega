import { getToken } from "../utils/session.js";

export const getProduct = async (id) => {
    const response = await fetch(`http://localhost:8000/api/products/${id}`);

    if(!response.ok) {
        throw new Error('No se pudo cargar el producto');
    }

    return await response.json();
}

export const deleteProduct = async (id) => {
    const token = getToken();

    const response = await fetch(`http://localhost:8000/api/products/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok){
        throw new Error('No se pudo eliminar el producto');
    }
}