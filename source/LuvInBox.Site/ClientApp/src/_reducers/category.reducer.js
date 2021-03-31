import { categoryConstants } from '../_constants';
const initialState = {
    categories: [],
    reload: true,
    error: null
}
export function category(state = initialState, action) {
    switch (action.type) {
        case categoryConstants.CATEG_REQUEST:
            return {
                categories: state.categories,
                reload: true
            };
        case categoryConstants.CATEG_SUCCESS:
            return {
                categories: action.categs,
                reload: false
            };
        case categoryConstants.CATEG_FAILURE:
            return {
                error: action.error,
                reload: false
            };
        default:
            return state
    }
}
