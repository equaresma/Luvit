import axios from 'axios';

export default class ProductHomeService {

    getProductsSmall() {
        return axios.get('data/products.json').then(res => res.data.data);
    }

    getProducts() {
        return axios.get('data/products.json').then(res => res.data.data);
    }

    getProductsWithOrdersSmall() {
        return axios.get('data/products.json').then(res => res.data.data);
    }
}