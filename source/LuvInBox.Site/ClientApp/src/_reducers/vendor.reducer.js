import { vendorConstants } from '../_constants';

const initialState = {
    vendor: {
        Name: '',
        FantasyName: '',
        FoundedIn: '',
        DocumentNumber: '',
        DocumentType: 5,
        LogoURL: '',
        WebSite: '',
        Email: '',
        MainAddress: { Local: '', Number: 0, Complement: '', City: '', State: '', ZipCode: '', Country: 'Brasil' },
        MainPhone: '',
        Mobile: '',
        HasPhysicalStore: false,
        Contact: {
            FamilyName: '',
            MiddleName: '',
            FirstName: '',
            Phone: '',
            Mobile: '',
            Email: '',
            DocumentNumber: '',
            DocumentType: 1
        },
        User: { Name: '', Password: '', IsPasswordChange: true, Type: 0 },
        BankInfo: { BankCode: '', BankBranch: '', AccountNumber: '' }
    },
    error: null
}
export function vendor(state = initialState, action) {
    switch (action.type) {
        case vendorConstants.VD_FAILURE:
            return {
                vendor: state.vendor,
                error: action.error
            };
        case vendorConstants.VD_GET_REQUEST:
        case vendorConstants.VD_GET_REQUEST:
        case vendorConstants.VD_SAVE_REQUEST:
        case vendorConstants.VD_INCR_SUCCESS:
            return {
                vendor: action.vendor,
                error: null
            }
        default:
            return state
    }
}
