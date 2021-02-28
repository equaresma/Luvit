import { alertConstants } from '../_constants';
import { productService } from '../_services';

export const productActions = {
    getAll
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
        console.log('sucess...');
        return { type: alertConstants.SUCCESS, products };
    }
    function failure(error) {
        console.log(`error ${error}`);
        return { type: alertConstants.ERROR, error };
    }
}
