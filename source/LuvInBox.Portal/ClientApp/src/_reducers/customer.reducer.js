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
        DocumentNumber: '',
        DocumentType: 1,
        MaritalStatus: 0,
        Degree: 0,
        Gender: 0,
        Address: { Local: '', Number: 0, Complement: '', City: '', State: '', ZipCode: '', Country: 'Brasil' },
        User: { Name: '', Password: '', "Type": 2 },
        Nickname: '',
        IsPublic: false
    },
    error: null
}
export function customer(state = initialState, action) {
    switch (action.type) {
        case customerConstants.CM_FAILURE:
            return {
                customer: state.customer,
                error: action.error
            };
        case customerConstants.CM_GET_REQUEST:
        case customerConstants.CM_GET_REQUEST:        
        case customerConstants.CM_SAVE_REQUEST:
        case customerConstants.CM_INCR_SUCCESS:
            return {
                customer: action.customer,
                error: null
            }        
        default:
            return state
    }
}
