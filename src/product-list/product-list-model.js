export const getProducts = async () => {
    const response = await fetch ('http://localhost:8000/api/products');

    if (!response.ok) {
        throw new Error("No se pudieron cargar los productos desde el servidor")
    }
    
    const products = await response.json();
    return products;
}