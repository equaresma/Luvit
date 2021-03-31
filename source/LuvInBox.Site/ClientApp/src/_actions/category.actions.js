import { categoryConstants } from '../_constants';
import { categoryService } from '../_services';

export const categoryActions = {
    getAll
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
