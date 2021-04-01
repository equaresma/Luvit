import { categoryConstants } from '../_constants';
const initialState = {
    categories: [],
    category: null,
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
        case categoryConstants.CATEG_BY_ID_REQUEST:
            return {
                category: state.category,
                reload: true
            }
        case categoryConstants.CATEG_BYID_SUCCESS:
            return {
                category: action.categ,
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
