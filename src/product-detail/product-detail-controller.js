import { getProduct, deleteProduct } from "./product-detail-model.js";
import { buildProduct, buildProductWithDelete } from "./product-detail-views.js";
import { dispatchNotification } from "../utils/dispatch-notifications.js";
import { dispatchLoading } from "../utils/dispatch-loading.js";
import { isLoggedIn, getToken } from "../utils/session.js";
import { getLoggedUserInfo } from "../session/session-model.js";

export const productDetailController = async (productContainer) => {

    //leo el id de la url 
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    //si no hay id, redirigimos a home (listado)
    if (!productId) {
        window.location = '/';
        return;
    }
    try {
        dispatchLoading(true);
        //conseguimos el producto especifico por id del product
        const product = await getProduct(productId);

        //si el producto no existe 
        if (!product) {
            productContainer.innerHTML = '<h2> Este anuncio no existe </h2>';
            return;
        }

        //comprobacion de pertenencia del producto
        let isOwner = false;

        if(isLoggedIn()){
            const { id } = await getLoggedUserInfo();
            isOwner = product.userId === id;//comparo si el id de su sesion es igual al del userId guardado en el producto
        }
        productContainer.innerHTML = isOwner
            ? buildProductWithDelete(product) //si es el owner puede borrar
            : buildProduct(product) //si no, no
            
        if (isOwner){
            const deleteButton = productContainer.querySelector('#delete-button');
            deleteButton.addEventListener('click', async () => {

                //pregunta de confirmacion de eliminado para el usuario
                const confirmed = window.confirm('¿Desea eliminar este anuncio?');
                if(!confirmed) return;

                try{
                    dispatchLoading(true);
                    await deleteProduct(productId);
                    dispatchNotification("Anuncio eliminado correctamente", "success");

                    setTimeout(() => {
                        window.location = '/';
                    }, 1500);
                } catch (error) {
                    dispatchNotification(error.message, "error");
                } finally {
                    dispatchLoading(false);
                }
            });
        } 

    } catch (error) {
        dispatchNotification(error.message, "error");
        productContainer.innerHTML = '<h2> Error al cargar el anuncio </h2>';
    
    } finally{
        dispatchLoading(false);
    }

}
