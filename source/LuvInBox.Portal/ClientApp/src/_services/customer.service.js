//import config from 'config';
//import { authHeader } from '../_helpers';
import moment from 'moment';

const url = 'api/Customers';

export const customerService = {
    create
};

async function create(CustomerDTO) {
    if (!moment(CustomerDTO.Birthday, moment.ISO_8601).isValid())
        CustomerDTO.Birthday = moment(CustomerDTO.Birthday).toISOString();

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(CustomerDTO)
    };

    return fetch(url, requestOptions)
        .then(handleResponse)
        .then(customer => {
            return customer;
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
