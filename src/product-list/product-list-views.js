export const buildProduct = (product) => {
    const newProduct = document.createElement('a');
    newProduct.classList.add('product-link');

    newProduct.setAttribute('href', `product-detail.html?id=${product.id}`);

    //construccion html con datos del producto
    newProduct.innerHTML = `
        <div class="product-card">
            ${product.image ? `<img src="${product.image}" alt="${product.name}" width="150">` : ''}
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="description">${product.description}</p>
                <p class="price"><strong>${product.price} €</strong></p>
                <p class="type">Tipo: <span>${product.type}</span></p>
            </div>
        </div>
    `;
    return newProduct;
}