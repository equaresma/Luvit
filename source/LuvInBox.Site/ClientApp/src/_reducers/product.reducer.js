import { productConstants } from '../_constants';

const initialState = {
    products: [],
    productFiltered: [],
    productPromotions: [],
    productByCategory: [],
    reload: true,
    error: null,
    product: {
        id: null,
        barCode: null,
        name: '',
        description: '',
        category: null,
        dimension: {
            weight: 0,
            width: 0,
            height: 0,
            length: 0,
            description: ''
        },
        brand: '',
        origin: '',
        manufacturer: '',
        completeDescription: '',
        material: '',
        usage: '',
        care: '',
        color: '',
        images: new Array(),
        status: 0
    }
}

export function products(state = initialState, action) {
    switch (action.type) {
        case productConstants.PRD_DEL_REQUEST:
        case productConstants.PRD_SAVE_REQUEST:
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
        case productConstants.PRD_DEL_SUCCESS:
        case productConstants.PRD_SAVE_SUCCESS:
            return {
                products: state.products,
                product: action.product,
                reload: true,
                error: action.error
            };
        case productConstants.PRD_DEL_ERROR:
        case productConstants.PRD_SAVE_ERROR:
            return {
                products: state.products,
                product: state.product,
                reload: true,
                error: action.error
            };
        case productConstants.PRD_NEW:
            return {
                products: state.products,
                product: state.product,
                reload: true,
                error: null
            };
        default:
            return state
    }
}
