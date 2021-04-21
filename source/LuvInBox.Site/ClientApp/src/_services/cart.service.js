export const cartService = {
    addProduct,
    removeProduct,
    get,
    empty,
    checkout
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
                    unitPrice: product.price,
                    category: null,
                    image: product.image
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
        }).catch(error => {
            return error;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}

