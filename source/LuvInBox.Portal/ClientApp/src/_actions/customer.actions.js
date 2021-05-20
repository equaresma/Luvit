import { customerConstants } from '../_constants';
import { customerService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const customerActions = {
    create,
    incrementCustomer
};

function create(customer) {
    return dispatch => {
        dispatch(request({ customer }));

        customerService.create(customer)
            .then(
                customer => {
                    dispatch(success(customer));
                    history.push('/login');
                }).catch(error => {
                    dispatch(failure(error, customer));
                    dispatch(alertActions.error(error));
                });
    };

    function request(customer) { return { type: customerConstants.CM_GET_REQUEST, customer } }
    function success(customer) { return { type: customerConstants.CM_INCR_SUCCESS, customer } }
    function failure(error, customer) { return { type: customerConstants.CM_FAILURE, error, customer } }
}

function incrementCustomer(customer) {
    return { type: customerConstants.CM_INCR_SUCCESS, customer };
}
