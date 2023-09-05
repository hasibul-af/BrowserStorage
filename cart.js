const addProduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value; 
    productField.value = '';
    quantityField.value = '';

    console.log(product, quantity);
    displayProduct (product, quantity);
    saveProductToLocalStorage(product, quantity)
}

    const displayProduct = (product, quantity) => {
        const ul = document.getElementById('product-container');
        const li = document.createElement('li');
        li.innerText = `${product}: ${quantity}`;
        ul.appendChild(li);
}

const getStoreShoppingCart = () => {
    let cart = {};
    const storeCart = localStorage.getItem('cart');
    if(storeCart){
        cart = JSON.parse(storeCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoreShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    console.log(cartStringified)
    localStorage.setItem('cart', cartStringified)
}

const displayProductFromLocalStorage = () => {
    const saveCart = getStoreShoppingCart();
    console.log(saveCart);
    
for(const product in saveCart){
    const quantity = saveCart[product];
    console.log(product, quantity);
    displayProduct(product, quantity);

    }
}

displayProductFromLocalStorage();