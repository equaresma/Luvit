import { customerActions } from '../_actions';
import { customerConstants } from '../_constants';

const initialState = {
    customer: {
        FamilyName: '',
        MiddleName: '',
        FirstName: '',
        Birthday: null,
        Email: '',
        Phone: '',
        Mobile: '',
        Document: { "Type": 5, Number: '', Name: '' },
        MaritalStatus: 0,
        Degree: 0,
        Gender: 0,
        Address: { Local: '', Number: 0, Complement: '', City: '', State: '', ZipCode: '', Country: 'Brasil' },
        Login: { customerName: '', Password: '' },
        Nickname: '',
        IsPublic: false
    },
    error: null
}
export function customer(state = initialState, action) {
    switch (action.type) {
        case customerConstants.CM_FAILURE:
            return {
                error: action.error
            };
        case customerConstants.CM_GET_REQUEST:
        case customerConstants.CM_GET_REQUEST:        
        case customerConstants.CM_SAVE_REQUEST:
        case customerConstants.CM_INCR_SUCCESS:
            return {
                customer: action.customer
            }        
        default:
            return state
    }
}
