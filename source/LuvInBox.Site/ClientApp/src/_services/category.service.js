//import config from 'config';
import { authHeader } from '../_helpers';

export const categoryService = {
    getAll
};

function getAll() {
    let url = 'api/Categories';
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(url, requestOptions)
        .then(handleResponse)
        .then(categs => {
            return categs;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                //logout();
                //let l = location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
