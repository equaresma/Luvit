import { customerConstants } from '../_constants';
import { customerService } from '../_services';

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
                }).catch(error => {
                    dispatch(failure(error, customer));
                });
    };

    function request(customer) { return { type: customerConstants.CM_GET_REQUEST, customer } }
    function success(customer) { return { type: customerConstants.CM_INCR_SUCCESS, customer } }
    function failure(error, customer) { return { type: customerConstants.CM_FAILURE, error, customer } }
}

function incrementCustomer(customer) {
    return { type: customerConstants.CM_INCR_SUCCESS, customer };
}
