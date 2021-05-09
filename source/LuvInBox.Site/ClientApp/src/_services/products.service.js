import { authHeader } from '../_helpers';

export const productService = {
    filter,
    getAll,
    getPromotions,
    getByCategory,
    setSelected,
    save,
    deleteProduct
};

function filter(value) {
    let url = 'api/Products/Filter?value=' + value;
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(url, requestOptions)
        .then(handleResponse)
        .then(products => {
            return products;
        });
}

function getAll() {
    let url = 'api/Products/Get';
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(url, requestOptions)
        .then(handleResponse)
        .then(products => {
            return products;
        });
}

function getPromotions() {
    let url = 'api/Products/GetPromotions';
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(url, requestOptions)
        .then(handleResponse)
        .then(products => {
            return products;
        }, error => {
            return error
        });
}

function getByCategory(id) {
    let url = 'api/Products/GetByCategory/' + id;
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(url, requestOptions)
        .then(handleResponse)
        .then(products => {
            return products;
        }, error => {
            return error
        });
}

function setSelected(product) {
    let promisse = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(product);
        }, 500);
    });

    return promisse.then(product => {
        return product;
    }, function (error) {
        return error;
    });
}

function deleteProduct(productId) {
    let url = 'api/Products/Delete/' + productId;
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(url, requestOptions)
        .then(handleResponse)
        .then(isDelete => {
            return isDelete;
        }, error => {
            return error
        });
}

function save(product) {
    if (product) {
        if (product.id)
            return _update(product);
        else
            return _create(product);
    }
}

function _create(product) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    };

    return fetch('api/Products/Post', requestOptions)
        .then(handleResponse)
        .then(product => {
            return product;
        }, error => {
            return error
        });
}

function _update(product) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    };

    return fetch(`api/Products/Put/${product.id}`, requestOptions)
        .then(handleResponse)
        .then(product => {
            return product;
        }, error => {
            return error
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        if (!response.ok) {
            const error = (text || text.message) || response.statusText;
            return Promise.reject(error);
        } else {
            return JSON.parse(text);
        }
    });
}