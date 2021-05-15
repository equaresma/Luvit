//import config from 'config';
import { authHeader } from '../_helpers';

export const categoryService = {
    getAll,
    getById
};

async function getAll() {
    let categs = JSON.parse(localStorage.getItem('categories'));
    if (categs) {
        let promisse = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(categs);
            }, 200);
        });

        return promisse.then(categs => {
            return categs;
        }, function (error) {
            return error;
        });

    } else {
        let url = 'api/Categories';
        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        };

        return fetch(url, requestOptions)
            .then(handleResponse)
            .then(categs => {
                //storage categs
                localStorage.setItem('categories', JSON.stringify(categs));
                return categs;
            });
    }
}

async function getById(id) {
    let categs = await getAll();
    let promisse = new Promise((resolve, reject) => {
        setTimeout(() => {
            let categ = categs.filter(c => c.id == id)[0];

            if (categ)
                resolve(categ);
            else
                reject(categ);

        }, 200);
    });

    return promisse.then(categ => {
        return categ;
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
