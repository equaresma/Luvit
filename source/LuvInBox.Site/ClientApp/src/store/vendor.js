const def_url = 'api/vendorS/';

const initialState = {
    Vendors: [],
    loading: false,
    errors: {},
    forceReload: false
}

export const actionCreators = {
    requestVendors: () => async (dispatch, getState) => {

        const url = def_url;
        const response = await fetch(url);
        const Vendors = await response.json();
        dispatch({ type: 'FETCH_VENDORS', Vendors });
    },
    createVendor: Vendor => async (dispatch, getState) => {       
        const url = def_url;
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(Vendor)
        };
        const request = new Request(url, requestOptions);
        await fetch(request)
            .then(data => data.text())
            .then(text => {                
                let msg = text;
                console.log("Msg: " + msg);
            }).catch(err => {
                let msg = err;
                console.log("Error Reading data " + msg);
            });
        dispatch({ type: 'SAVE_VENDOR', Vendor });
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    switch (action.type) {
        case 'FETCH_VENDORS': {
            return {
                ...state,
                Vendors: action.Vendors,
                loading: false,
                errors: {},
                forceReload: false
            }
        }
        case 'SAVE_VENDOR': {
            return {
                ...state,
                Vendors: Object.assign({}, action.Vendor),
                forceReload: true
            }
        }
        default:
            return state;
    }
};