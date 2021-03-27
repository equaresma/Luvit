import { alertConstants } from '../_constants';
const initialState = {
    products: [],
    product: null,
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
                product: action.product,
                reload: false,
                error: null
            };
        case alertConstants.ERROR:
            return {
                products: [],
                product: null,
                reload: true,
                error: action.error
            };
        default:
            return initialState
    }
}
