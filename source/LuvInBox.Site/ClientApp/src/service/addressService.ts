import axios from 'axios';

export default class AddressService {
    getAddressByCEP(zipCode: string) {
        //Nova variável "cep" somente com dígitos.
        var cep = zipCode.replace(/\D/g, '');
        let url = "//viacep.com.br/ws/" + cep + "/json/?callback=?";

        return axios.get(url);
    }
}