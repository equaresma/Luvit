import { sizeConstants } from '../_constants';
const initialState = {
    sizes: [],
    size: null,
    reload: true,
    error: null
}
export function size(state = initialState, action) {
    switch (action.type) {
        case sizeConstants.SZ_REQUEST:
            return {
                sizes: state.sizes,
                reload: true
            };
        case sizeConstants.SZ_SUCCESS:
            return {
                sizes: action.sizes,
                reload: false
            };
        case sizeConstants.SZ_BY_ID_REQUEST:
            return {
                size: state.size,
                reload: true
            }
        case sizeConstants.SZ_BYID_SUCCESS:
            return {
                size: action.size,
                reload: false
            };
        case sizeConstants.SZ_FAILURE:
            return {
                error: action.error,
                reload: false
            };
        default:
            return state
    }
}
