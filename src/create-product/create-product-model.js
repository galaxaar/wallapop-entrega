import { getToken } from "../utils/session.js";

//primero cargamos la imagen
const uploadImage = async (imageFile) => {
    const formData = new FormData();
    formData.append('file', imageFile);

    const response = await fetch('http://localhost:8000/upload', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${getToken()}`
        },
        body: formData
    });

    if (!response.ok) {
        throw new Error('No se pudo subir la imagen');
    }
    const data = await response.json();
    console.log('respuesta del upload:', JSON.stringify(data));
    return data.path;
}

export const createProduct = async (name, description, price, type, imageFile) => {
    const token = getToken();

    let imageUrl = null;
    if(imageFile) {
        imageUrl = await uploadImage(imageFile);
    }

    const response = await fetch('http://localhost:8000/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            name,
            description,
            price: Number(price), 
            type,
            image: imageUrl
        })
    });

    if (!response.ok) {
        throw new Error("No se pudo crear el anuncio");
    }

    return await response.json();
}



