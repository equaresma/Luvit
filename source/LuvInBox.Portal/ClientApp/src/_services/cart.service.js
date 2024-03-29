export const cartService = {
    addProduct,
    removeProduct,
    get,
    empty,
    checkout,
    calculateShipping
};

function get() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = (Array.isArray(cart)) ? cart : [];

    let promisse = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(cart);
        }, 500);
    });

    return promisse.then(cart => {
        return cart;
    }, function (error) {
        return error;
    });
}

function addProduct(product) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = (Array.isArray(cart)) ? cart : [];

    let promisse = new Promise((resolve) => {
        setTimeout(() => {
            let id = product.id;
            let currProd = cart.find(({ productId }) => productId == id);

            if (currProd) {
                currProd.quantity += 1;
            } else {
                cart.push({
                    productId: product.id,
                    productName: product.name,
                    productDescription: product.description,
                    quantity: 1,
                    price: (product.price) ? product.price : 1.99,
                    category: null,
                    image: Array.isArray(product.images) ? product.images[0] : product.images,
                    shipping: { deadline: 0, value: 0 },
                    vendorId: product.vendorId,
                    vendorName: product.vendorName,
                    vendorZipCode: product.vendorZipCode,
                    vendorDocNumber: product.vendorDocNumber,
                    dimension: {
                        weigth: 1,
                        length: 20,
                        height: 20,
                        width: 20
                    }
                });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            resolve(cart);
        }, 500);
    });

    return promisse.then(product => {
        return product;
    }, function (error) {
        return error;
    });
}

function removeProduct(product) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = (Array.isArray(cart)) ? cart : [];

    let promisse = new Promise(resolve => {
        setTimeout(() => {
            let id = product.id;
            let cart = cart.find(({ productId }) => productId == id);

            localStorage.setItem('cart', JSON.stringify(cart));
            resolve(cart);
        }, 500);
    });

    return promisse.then(product => {
        return product;
    }, function (error) {
        return error;
    });
}

function empty() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = (Array.isArray(cart)) ? cart : [];

    let promisse = new Promise(resolve => {
        setTimeout(() => {
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            resolve(cart);
        }, 500);
    });

    return promisse.then(() => {
        return true;
    }, function (error) {
        return error;
    });
}

async function checkout() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    //enable when customer data was present.
    //let usr = JSON.parse(localStorage.getItem('user'));
    cart = (Array.isArray(cart)) ? cart : [];

    let payment = {
        customer: null,
        items: cart
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payment)
    };

    return await fetch('api/Payment/', requestOptions)
        .then(handleResponse)
        .then(id => {
            return id;
        });
}

async function calculateShipping(zipCodeDestiny) {
    let shippings = [];
    let cart = JSON.parse(localStorage.getItem('cart'));

    cart = (Array.isArray(cart)) ? cart : [];
    cart.forEach((item) => {
        shippings.push({
            productId: item.productId,
            zipCodeOrigin: item.vendorZipCode,
            zipCodeDestiny: zipCodeDestiny,
            dimension: item.dimension
        });
    });

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(shippings)
    };

    return await fetch('api/Shipping/CalculateCart', requestOptions)
        .then(handleResponse)
        .then(shippings => {
            return JSON.parse(shippings);
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        if (!response.ok) {
            const error = (text || text.message) || (response.statusText || response.status);
            return Promise.reject(error);
        } else {
            return text;
        }
    });
}

