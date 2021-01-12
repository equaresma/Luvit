import axios from 'axios';

export default class ProductHomeService {
    getProductsSmall() {
        return axios.get('api/product');
    }

    getProducts() {
        return axios.get('api/product');
    }

    getProductsWithOrdersSmall() {
        return axios.get('api/product');
    }
}