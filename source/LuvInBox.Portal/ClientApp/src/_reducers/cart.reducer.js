import { cartConstants } from '../_constants';
const initialState = {
    cart: [],
    product: {},
    error: null,
    checkoutId: null,
    reload: false,
    isCheckingout: false
}
export function cart(state = initialState, action) {
    switch (action.type) {
        case cartConstants.ADD_PRD_REQUEST:
        case cartConstants.RMV_PRD_REQUEST:
        case cartConstants.GET_REQUEST:
        case cartConstants.GHKOUT_REQUEST:
        case cartConstants.SHIPPG_REQUEST:
            return { ...state };
        case cartConstants.ADD_PRD_SUCCESS:
        case cartConstants.RMV_PRD_SUCCESS:
            return {
                cart: state.cart,
                product: action.product,
                error: null,
                reload: false,
                checkoutId: null,
                isCheckingout: false
            };
        case cartConstants.GET_SUCCESS:
            return {
                cart: action.cart,
                product: {},
                error: null,
                checkoutId: null,
                reload: false,
                isCheckingout: false
            };
		case cartConstants.GHKOUT_SUCCESS:
            return {
                cart: action.cart,
                product: {},
                error: null,
                checkoutId: action.checkoutId,
                reload: false,
                isCheckingout: true
			}
        case cartConstants.ERROR:
        case cartConstants.ERROR:
        case cartConstants.SHIPPG_FAILURE:
			return {
                error: action.error,
                reload: false,
                isCheckingout: false
            }        
        case cartConstants.SHIPPG_SUCCESS:
            return {
                cart: action.cart,
                product: {},
                error: null,
                checkoutId: null,
                reload: true,
                isCheckingout: false
            };         
        default:
            return initialState
    }
}
