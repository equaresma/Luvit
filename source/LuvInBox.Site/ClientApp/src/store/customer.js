const def_url = 'api/customers/';

const initialState = {
    Customers: [],
    Customer: {
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
        Login: { UserName: '', Password: '' }
    },
    loading: false,
    errors: {},
    forceReload: false
}

export const customerActionCreators = {
    requestCustomers: () => async (dispatch, getState) => {

        const url = def_url;
        const response = await fetch(url);
        const Customers = await response.json();
        dispatch({ type: 'FETCH_CUSTOMERS', Customers });
    },
    createCustomer: Customer => async (dispatch, getState) => {       
        const url = def_url;
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(Customer)
        };
        const request = new Request(url, requestOptions);
        await fetch(request)
            .then(data => data.text())
            .then(text => {                
                let ovo = text;
                console.log("Msg: " + ovo);
            }).catch(err => {
                let ovo = err;
                console.log("Error Reading data " + err);
            });
        dispatch({ type: 'SAVE_CUSTOMER', Customer });
    },
    incrementCustomer: Customer => (dispatch, getState) => {
        dispatch({ type: 'INCR_CUSTOMER', Customer });
    }
};

export const customerReducer = (state, action) => {
    state = state || initialState;

    switch (action.type) {
        case 'INCR_CUSTOMER':
        case 'FETCH_CUSTOMERS': {
            return {
                ...state,
                Customers: action.Customers,
                Customer: action.Customer,
                loading: false,
                errors: {},
                forceReload: false
            }
        }
        case 'SAVE_CUSTOMER': {
            return {
                ...state,
                Customers: Object.assign({}, action.Customer),
                Customer: action.Customer,
                forceReload: true
            }
        }
        default:
            return state;
    }
};