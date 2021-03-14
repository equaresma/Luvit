//import config from 'config';
//import { authHeader } from '../_helpers';

export const cartService = {
    addProduct,
    removeProduct,
    get,
    empty
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


    let promisse = new Promise((resolve, reject) => {
        setTimeout(() => {
            cart.push(product);
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


    let promisse = new Promise((resolve, reject) => {
        setTimeout(() => {
            cart = cart.filter(function (ele) {
                return ele.id != product.id;
            });

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


    let promisse = new Promise((resolve, reject) => {
        setTimeout(() => {
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            resolve(cart);
        }, 500);
    });

    return promisse.then(product => {
        return true;
    }, function (error) {
        return error;
    });
}
