import { alertConstants } from '../_constants';
const initialState = {
    products: [],
    reload: true,
    error: null
}
export function products(state = initialState, action) {
    switch (action.type) {
        case 'PRODUCT_REQUEST':
            return { ...state };
        case alertConstants.SUCCESS:
            return {
                products: action.products,
                reload: false,
                error: null
            };
        case alertConstants.ERROR:
            return {
                products: [],
                reload: true,
                error: action.error
            };
        default:
            return initialState
    }
}
