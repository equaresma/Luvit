import { userConstants } from '../_constants';

const initialState = {
    user: { userName: '', userType: 0 },
    isUnobstrutive: false,
    error: null
}

export function user(state = initialState, action) {
    switch (action.type) {
        case userConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case userConstants.GETALL_SUCCESS:
            return {
                items: action.users
            };
        case userConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        case userConstants.GET_UNOBSTRUTIVE:
        case userConstants.SET_UNOBSTRUTIVE:
            return {
                isUnobstrutive: action.value
            }
        default:
            return state
    }
}
