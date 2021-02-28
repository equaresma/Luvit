import { cartConstants } from '../_constants';
const initialState = {
    cart: [],
    product: {},
    error: null
}
export function cart(state = initialState, action) {
    switch (action.type) {
        case cartConstants.ADD_PRD_REQUEST:
        case cartConstants.RMV_PRD_REQUEST:
        case cartConstants.GET_REQUEST:
            return { ...state };
        case cartConstants.ADD_PRD_SUCCESS:
        case cartConstants.RMV_PRD_SUCCESS:
            return {
                cart: state.cart,
                product: action.product,
                error: null
            };
        case cartConstants.GET_SUCCESS:
            return {
                cart: action.cart,
                product: {},
                error: null
            };
        case cartConstants.ERROR:
        default:
            return initialState
    }
}
