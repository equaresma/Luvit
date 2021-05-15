import { vendorConstants } from '../_constants';
import { vendorService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const vendorActions = {
    create,
    incrementVendor
};

function create(vendor) {
    return dispatch => {
        dispatch(request({ vendor }));

        vendorService.create(vendor)
            .then(
                vendor => {
                    dispatch(success(vendor));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(vendor) { return { type: vendorConstants.VD_GET_REQUEST, vendor } }
    function success(vendor) { return { type: vendorConstants.VD_INCR_SUCCESS, vendor } }
    function failure(error) { return { type: vendorConstants.VD_FAILURE, error } }
}

function incrementVendor(vendor) {
    return { type: vendorConstants.VD_INCR_SUCCESS, vendor };
}
