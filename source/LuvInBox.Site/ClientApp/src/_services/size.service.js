//import config from 'config';
import { authHeader } from '../_helpers';

export const sizeService = {
    getAll,
    getById
};

async function getAll() {
    let sizes = JSON.parse(localStorage.getItem('sizes'));
    if (sizes) {
        let promisse = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(sizes);
            }, 200);
        });

        return promisse.then(sizes => {
            return sizes;
        }, function (error) {
            return error;
        });

    } else {
        let url = 'api/Sizes';
        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        };

        return fetch(url, requestOptions)
            .then(handleResponse)
            .then(sizes => {
                //storage sizes
                localStorage.setItem('sizes', JSON.stringify(sizes));
                return sizes;
            });
    }
}

async function getById(id) {
    let sizes = await getAll();
    let promisse = new Promise((resolve, reject) => {
        setTimeout(() => {
            let size = sizes.filter(c => c.id == id)[0];

            if (size)
                resolve(size);
            else
                reject(size);

        }, 200);
    });

    return promisse.then(size => {
        return size;
    }, function (error) {
        return error;
    });
}

function handleResponse(response) {
    return response.text().then(text => {
        if (!response.ok) {
            const error = (text || text.message) || (response.statusText || response.status);
            return Promise.reject(error);
        } else {
            return JSON.parse(text);
        }
    });
}
