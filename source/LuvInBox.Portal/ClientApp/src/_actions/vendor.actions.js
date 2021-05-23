import { vendorConstants } from '../_constants';
import { vendorService } from '../_services';

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
                }).catch(error => {
                    dispatch(failure(error, vendor));
                });
    };

    function request(vendor) { return { type: vendorConstants.VD_GET_REQUEST, vendor } }
    function success(vendor) { return { type: vendorConstants.VD_INCR_SUCCESS, vendor } }
    function failure(error, vendor) { return { type: vendorConstants.VD_FAILURE, error, vendor } }
}

function incrementVendor(vendor) {
    return { type: vendorConstants.VD_INCR_SUCCESS, vendor };
}
