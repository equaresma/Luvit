import { addressConstants } from '../_constants';
import { addressService } from '../_services';
import { alertActions } from './';

export const addressActions = {
    find
};

function find(zipcode) {
    return dispatch => {
        dispatch(request({ zipcode }));

        addressService.find(zipcode)
            .then(
                address => {
                    dispatch(success(address));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(zipcode) { return { type: addressConstants.ADDRESS_REQUEST, zipcode } }
    function success(address) { return { type: addressConstants.ADDRESS_SUCCESS, address } }
    function failure(error) { return { type: addressConstants.ADDRESS_FAILURE, error } }
}
