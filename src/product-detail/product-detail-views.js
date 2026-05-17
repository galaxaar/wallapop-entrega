export const buildProduct = (product) => {
    return `
    <div class="product-detail-card">
        ${product.image ? `<img src="${product.image}" alt="${product.name}" width="300">` : ''}
        <div class="product-detail-info">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p><strong>${product.price} €</strong></p>
            <p>Tipo: <span>${product.type}</span></p>
        </div>
    </div>
    `;
}

export const buildProductWithDelete = (product) => {
    return `
    <div class="product-detail-card">
        ${product.image ? `<img src="${product.image}" alt="${product.name}" width="300">` : ''}
        <div class="product-detail-info">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p><strong>${product.price} €</strong></p>
            <p>Tipo: <span>${product.type}</span></p>
            <button id="delete-button">Eliminar anuncio</button>
        </div>
    </div>
    `;
}
