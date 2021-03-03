//import config from 'config';
import { authHeader } from '../_helpers';

export const addressService = {
    find
};

async function find(zipcode) {
    let url = "https://viacep.com.br/ws/" + zipcode + "/json/?callback=?";

     const requestOptions = {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' },         
     };

     return await fetch(url, requestOptions)
         .then(handleResponse)
         .then(address => {
             address.ZipCode = zipcode;
             return address;
         });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text;

        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        } else {
            let strJson = data.replace('?', '').replace('(', '').replace(')', '').replace(';', '');
            let dados = JSON.parse(strJson);

            if (dados.hasOwnProperty('error')) {
                return Promise.reject('Erro ao consultar CEP: ' + dados.error);
            } else {
                let nAdd = {
                    Local: dados.logradouro,
                    Number: 0,
                    Complement: dados.complemento + ' ' + dados.bairro,
                    City: dados.localidade,
                    State: dados.uf,
                    ZipCode: '',
                    Country: 'Brasil'
                };

                return Promise.resolve(nAdd);
            }
        }
    });
}
