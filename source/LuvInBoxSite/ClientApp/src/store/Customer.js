const def_url = 'api/customer/';

const initialState = {
    Customers: [],
    loading: false,
    errors: {},
    forceReload: false
}

export const actionCreators = {
    requestCustomers: () => async (dispatch, getState) => {

        const url = def_url;
        const response = await fetch(url);
        const Customers = await response.json();
        dispatch({ type: 'FETCH_CUSTOMERS', Customers });
    },
    saveCustomer: Customer => async (dispatch, getState) => {       
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
    deleteCustomer: Id => async (dispatch, getState) => {
        const url = def_url + Id;
        const requestOptions = {
            method: 'DELETE',
        };
        const request = new Request(url, requestOptions);
        await fetch(request);
        dispatch({ type: 'DELETE_CUSTOMER', Id });
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    switch (action.type) {
        case 'FETCH_CUSTOMERS': {
            return {
                ...state,
                Customers: action.Customers,
                loading: false,
                errors: {},
                forceReload: false
            }
        }
        case 'SAVE_CUSTOMER': {
            return {
                ...state,
                Customers: Object.assign({}, action.Customer),
                forceReload: true
            }
        }
        case 'DELETE_CUSTOMER': {
            return {
                ...state,
                Id: action.Id,
                forceReload: true
            }
        }
        default:
            return state;
    }
};