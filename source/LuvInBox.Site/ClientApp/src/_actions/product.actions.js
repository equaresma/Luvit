import { productConstants } from '../_constants';
import { productService } from '../_services';
import { history } from '../_helpers';

export const productActions = {
    filter,
    getAll,
    getPromotions,
    getByCategory,
    setSelected,
    save,
    newProduct,
    deleteProduct
};

function filter(value) {
    return dispatch => {
        dispatch(request());

        productService.filter(value)
            .then(
                products => {
                    dispatch(success(products));
                    history.push('/filteredProducts');
                },
                error => dispatch(failure(error))
            );
    };

    function request() {
        console.log('Requesting...');
        return { type: productConstants.PRD_FILTER };
    }
    function success(products) {
        console.log('success...');
        return { type: productConstants.PRD_FILTER_SUCCESS, products };
    }
    function failure(error) {
        console.log(`error ${error}`);
        return { type: productConstants.PRD_ERROR, error };
    }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        productService.getAll()
            .then(products => {
                dispatch(success(products))
            }).catch(error => {
                dispatch(failure(error))
            })
    };

    function request() {
        console.log('Requesting...');
        return { type: productConstants.PRD_REQUEST };
    }
    function success(products) {
        console.log('success...');
        return { type: productConstants.PRD_SUCCESS, products };
    }
    function failure(error) {
        console.log(`error ${error}`);
        return { type: productConstants.PRD_FAILURE, error };
    }
}

function getPromotions() {
    return dispatch => {
        dispatch(request());

        productService.getPromotions()
            .then(
                products => {
                    dispatch(success(products))
                },
                error => dispatch(failure(error))
            );
    };

    function request() {
        console.log('Requesting...');
        return { type: productConstants.PRD_PROMOTIONS };
    }
    function success(products) {
        console.log('success...');
        return { type: productConstants.PRD_PROMOTIONS_SUCCESS, products };
    }
    function failure(error) {
        console.log(`error ${error}`);
        return { type: productConstants.PRD_ERROR, error };
    }
}

function getByCategory(id) {
    return dispatch => {
        dispatch(request());

        productService.getByCategory(id)
            .then(
                products => {
                    dispatch(success(products));
                    history.push('/productsByCateg');
                },
                error => dispatch(failure(error))
            );
    };

    function request() {
        console.log('Requesting...');
        return { type: productConstants.PRD_BY_CATEGORY };
    }
    function success(products) {
        console.log('success...');
        return { type: productConstants.PRD_BY_CATEGORY_SUCCESS, products };
    }
    function failure(error) {
        console.log(`error ${error}`);
        return { type: productConstants.PRD_ERROR, error };
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
        return { type: productConstants.PRD_REQUEST };
    }
    function success(products) {
        console.log('success...');
        return { type: productConstants.PRD_SUCCESS, product };
    }
}

function save(product) {
    return dispatch => {
        dispatch(request());

        productService.save(product)
            .then(
                product => {
                    dispatch(success(product));
                },
                error => dispatch(failure(error))
            );
    };

    function request() {
        console.log('Requesting...');
        return { type: productConstants.PRD_SAVE_REQUEST };
    }
    function success(product) {
        console.log('success...');
        return { type: productConstants.PRD_SAVE_SUCCESS, product };
    }
    function failure(error) {
        console.log(`error ${error}`);
        return { type: productConstants.PRD_SAVE_ERROR, error };
    }
}

function deleteProduct(productId) {
    return dispatch => {
        dispatch(request());

        productService.deleteProduct(productId)
            .then(
                product => {
                    dispatch(success(product));
                },
                error => dispatch(failure(error))
            );
    };

    function request() {
        console.log('Requesting...');
        return { type: productConstants.PRD_DEL_REQUEST };
    }
    function success(product) {
        console.log('success...');
        return { type: productConstants.PRD_DEL_SUCCESS, product };
    }
    function failure(error) {
        console.log(`error ${error}`);
        return { type: productConstants.PRD_DEL_ERROR, error };
    }
}

function newProduct() {
    return dispatch => {
        dispatch(success());
    };

    function success() {
        return { type: productConstants.PRD_NEW };
    }
}
