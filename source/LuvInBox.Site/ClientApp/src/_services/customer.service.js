//import config from 'config';
//import { authHeader } from '../_helpers';
import moment from 'moment';

const url = 'api/Customers';

export const customerService = {
    create
};

async function create(CustomerDTO) {
    //CustomerDTO.Birthday = moment(CustomerDTO.Birthday, "DD/MM/YYYY").format("YYYY-MM-DD HH:mm:ss");
   // CustomerDTO.Birthday = moment.utc(CustomerDTO.Birthday, "DD/MM/YYYY").valueOf();
    CustomerDTO.Birthday = moment(CustomerDTO.Birthday, "DD/MM/YYYY").toISOString();

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
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (Array.isArray(data.errors)) {
                return Promise.reject("Errors: " + data.errors.toString());
            } else if (typeof data.errors === 'object') {
                let txt = '';
                for (let x in data.errors) {
                    txt += data.errors[x];
                }
                return Promise.reject("Error: " + txt);
            }else {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
        }
        return data;
    });
}
