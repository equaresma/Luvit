import { productConstants } from '../_constants';
const initialState = {
    products: [],
    product: null,
    productFiltered: [],
    productPromotions: [],
    productByCategory: [],
    reload: true,
    error: null
}
export function products(state = initialState, action) {
    switch (action.type) {
        case productConstants.PRD_REQUEST:
            return { ...state };
        case productConstants.PRD_SUCCESS:
            return {
                products: action.products,
                product: action.product,
                productFiltered: state.productFiltered,
                productPromotions: state.productPromotions,
                productByCategory: state.productByCategory,
                reload: false,
                error: null
            };
        case productConstants.PRD_FILTER_SUCCESS:
            return {
                products: state.products,
                product: state.product,
                productFiltered: action.products,
                productPromotions: state.productPromotions,
                productByCategory: state.productByCategory,
                reload: false,
                error: null
            };
        case productConstants.PRD_PROMOTIONS_SUCCESS:
            return {
                products: state.products,
                product: state.product,                
                productFiltered: state.productFiltered,
                productPromotions: action.products,
                productByCategory: state.productPromotions,
                reload: false,
                error: null
            };
        case productConstants.PRD_BY_CATEGORY_SUCCESS:
            return {
                products: state.products,
                product: state.product,
                productFiltered: state.productFiltered,
                productPromotions: state.productPromotions,
                productByCategory: action.products,
                reload: false,
                error: null
            };
        case productConstants.PRD_FAILURE:
            return {
                products: [],
                product: null,
                reload: true,
                error: action.error
            };
        default:
            return state
    }
}
