import { addressConstants } from '../_constants';
const initialState = {
    address: {
        Local: '',
        Number: 0,
        Complement: '',
        City: '',
        State: '',
        ZipCode: '',
        Country: 'Brasil'
    },
    error: null
}
export function address(state = initialState, action) {
    switch (action.type) {
        case addressConstants.ADDRESS_REQUEST:
            return state;
        case addressConstants.ADDRESS_SUCCESS:
            return {
                address: action.address
            };
        case addressConstants.ADDRESS_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}
