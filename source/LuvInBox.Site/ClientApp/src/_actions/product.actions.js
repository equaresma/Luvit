import { alertConstants } from '../_constants';
import { productService } from '../_services';
import { history } from '../_helpers';

export const productActions = {
    getAll,
    setSelected
};

function getAll() {
    return dispatch => {
        dispatch(request());

        productService.getAll()
            .then(
                products => dispatch(success(products)),
                error => dispatch(failure(error))
            );
    };

    function request() {
        console.log('Requesting...');
        return { type: 'PRODUCT_REQUEST' };
    }
    function success(products) {
        console.log('success...');
        return { type: alertConstants.SUCCESS, products };
    }
    function failure(error) {
        console.log(`error ${error}`);
        return { type: alertConstants.ERROR, error };
    }
}

function setSelected(product) {
    return dispatch => {
        dispatch(request());

        productService.setSelected(product)
            .then(
                product => {
                    dispatch(success(product));
                    history.push('/product');
                }
            );
    };

    function request() {
        console.log('Requesting...');
        return { type: 'PRODUCT_REQUEST' };
    }
    function success(products) {
        console.log('success...');
        return { type: alertConstants.SUCCESS, product };
    }
}