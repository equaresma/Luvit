import axios from 'axios';

export const addressService = {
    find
};

async function find(zipcode) {
    var cep = zipcode.replace(/\D/g, '');
    let url = "https://viacep.com.br/ws/" + cep + "/json/?callback=?";
    
    return axios.get(url)
        .then(handleResponse)
        .then(address => {
            address.ZipCode = cep;
            return address;
        });
}

function handleResponse(response) {
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
}
