import { sizeConstants } from '../_constants';
import { sizeService } from '../_services';

export const sizeActions = {
    getAll,
    getById
};

function getAll() {
    return dispatch => {
        dispatch(request({  }));

        sizeService.getAll()
            .then(
                sizes => {
                    dispatch(success(sizes));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(sizes) { return { type: sizeConstants.SZ_REQUEST, sizes } }
    function success(sizes) {
        return { type: sizeConstants.SZ_SUCCESS, sizes }
    }
    function failure(error) { return { type: sizeConstants.SZ_FAILURE, error } }
}

function getById(id) {
    return dispatch => {
        dispatch(request({}));

        sizeService.getById(id)
            .then(
                size => {
                    dispatch(success(size));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(size) { return { type: sizeConstants.SZ_BY_ID_REQUEST, size } }
    function success(size) {
        return { type: sizeConstants.SZ_BYID_SUCCESS, size }
    }
    function failure(error) { return { type: sizeConstants.SZ_FAILURE, error } }
}
