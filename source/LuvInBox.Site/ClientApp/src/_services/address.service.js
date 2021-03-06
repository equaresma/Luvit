import axios from 'axios';
//import config from 'config';
//import { authHeader } from '../_helpers';

export const addressService = {
    find
};

async function find(zipcode) {
    //New variable "cep" only digits.
    var cep = zipcode.replace(/\D/g, '');
    let url = "https://viacep.com.br/ws/" + cep + "/json/?callback=?";

    //const requestOptions = {
    //    method: 'GET',
    //    headers: { 'Content-Type': 'application/json' },         
    //};

    //return await fetch(url, requestOptions)
    //    .then(handleResponse)
    //    .then(address => {
    //        address.ZipCode = zipcode;
    //        return address;
    //    });

    
    return axios.get(url)
        .then(handleResponse)
        .then(address => {
            address.ZipCode = cep;
            return address;
        });
}

function handleResponse(response) {
    //return response.text().then(text => {
        const data = response.data;

        if (!response.status === 200) {
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
    //});
}
