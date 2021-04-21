import { cartConstants } from '../_constants';
import { alertActions } from './';
import { cartService } from '../_services';

export const cartActions = {
    addProduct,
    removeProduct,
    get,
    empty,
	checkout
};

function get() {
    return dispatch => {
        dispatch(request());

        cartService.get()
            .then(
                cart => {
                    dispatch(success(cart));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(cart) { return { type: cartConstants.GET_REQUEST, cart } }
    function success(cart) { return { type: cartConstants.GET_SUCCESS, cart } }
    function failure(error) { return { type: cartConstants.GET_FAILURE, error } }
}

function addProduct(product) {
    return dispatch => {
        dispatch(request(product));

        cartService.addProduct(product)
            .then(
                product => {
                    dispatch(success(product));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(product) { return { type: cartConstants.ADD_PRD_REQUEST, product } }
    function success(product) { return { type: cartConstants.ADD_PRD_SUCCESS, product } }
    function failure(error) { return { type: cartConstants.ADD_PRD_FAILURE, error } }
}

function removeProduct(product) {
    return dispatch => {
        dispatch(request(product));

        cartService.removeProduct(product)
            .then(
                product => {
                    dispatch(success(product));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(product) { return { type: cartConstants.RMV_PRD_REQUEST, product } }
    function success(product) { return { type: cartConstants.RMV_PRD_SUCCESS, product } }
    function failure(error) { return { type: cartConstants.RMV_PRD_FAILURE, error } }
}

function empty() {
    return dispatch => {
        dispatch(request());

        cartService.empty()
            .then(
                x => {
                    dispatch(success(true));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(product) { return { type: cartConstants.RMV_PRD_REQUEST, product } }
    function success(product) { return { type: cartConstants.RMV_PRD_SUCCESS, product } }
    function failure(error) { return { type: cartConstants.RMV_PRD_FAILURE, error } }
}

function checkout(){
	return dispatch => {
			dispatch(request());

			cartService.checkout()
				.then(
					checkoutId => {
						dispatch(success(checkoutId));
					},
					error => {
						dispatch(failure(error));
						dispatch(alertActions.error(error));
					}
				);
		};

		function request() { return { type: cartConstants.GHKOUT_REQUEST } }
		function success(checkoutId) { return { type: cartConstants.GHKOUT_SUCCESS, checkoutId } }
		function failure(error) { return { type: cartConstants.GHKOUT_FAILURE, error } }	
}