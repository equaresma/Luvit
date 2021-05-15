import { categoryConstants } from '../_constants';
import { categoryService } from '../_services';

export const categoryActions = {
    getAll,
    getById
};

function getAll() {
    return dispatch => {
        dispatch(request({  }));

        categoryService.getAll()
            .then(
                categs => {
                    dispatch(success(categs));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(categs) { return { type: categoryConstants.CATEG_REQUEST, categs } }
    function success(categs) {
        return { type: categoryConstants.CATEG_SUCCESS, categs }
    }
    function failure(error) { return { type: categoryConstants.CATEG_FAILURE, error } }
}

function getById(id) {
    return dispatch => {
        dispatch(request({}));

        categoryService.getById(id)
            .then(
                categ => {
                    dispatch(success(categ));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(categ) { return { type: categoryConstants.CATEG_BY_ID_REQUEST, categ } }
    function success(categ) {
        return { type: categoryConstants.CATEG_BYID_SUCCESS, categ }
    }
    function failure(error) { return { type: categoryConstants.CATEG_FAILURE, error } }
}
