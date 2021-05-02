import { authHeader } from '../_helpers';

export const productService = {
    filter,
    getAll,
    getPromotions,
    getByCategory,
    setSelected
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
