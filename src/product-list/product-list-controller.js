import { getProducts } from "./product-list-model.js";
import { buildProduct } from "./product-list-views.js";
import { dispatchNotification } from "../utils/dispatch-notifications.js";
import { dispatchLoading } from "../utils/dispatch-loading.js";


export const productsListController = async (productContainer) => {
    //limpio el contenedor
    productContainer.innerHTML = '';

    try {
        //spinner
        dispatchLoading(true)
        //obtengo los datos
        const products = await getProducts();

        //estado vacio:
        if (products.length === 0) {
            //lo elijo antes qeu el dispatchNotification q solo durará segundos
            productContainer.innerHTML = '<h2>No hay productos disponibles...</h2>';
            return;
        }

        //estado de exito:
        showProducts(products, productContainer);
        
    } catch (error) {
        // si algo falla en el fetch
        dispatchNotification("Error: " + error.message, "error");

        const productsFailedEvent = new CustomEvent('loadProductsFailed', {
            detail: {
                message: 'No se han podido cargar los productos. Intentelo de nuevo en unos momentos',
                type: 'error'
            }
        })
        productContainer.dispatchEvent(productsFailedEvent)

    } finally {
        dispatchLoading(false);
    }
}

const showProducts = (products, productContainer) => {
    
    products.forEach(product => {
        //llamo a la vista para construir el html del product
        const newProductElement = buildProduct(product);
        productContainer.appendChild(newProductElement)
    });
}