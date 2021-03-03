//import config from 'config';
import { authHeader } from '../_helpers';

const url = 'api/customer';

export const customerService = {
    create
};

async function create(customer) {
     const requestOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ customer })
     };

    return fetch(`${url}/customer/post`, requestOptions)
         .then(handleResponse)
         .then(customer => {
             return customer;
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
