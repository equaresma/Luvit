import { userConstants } from '../_constants';

let user = localStorage.user ? JSON.parse(localStorage.user) : {};
const initialState = {
    loggedIn: false,
    user: {}
};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: false,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {
                loggedIn: true,
                user: null
            };
        case userConstants.LOGOUT:
            return initialState;
        default:
            return initialState;
    }
}
