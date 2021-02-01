const def_url = 'api/vendor/';

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
    saveVendor: Vendor => async (dispatch, getState) => {       
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
    },
    deleteVendor: Id => async (dispatch, getState) => {
        const url = def_url + Id;
        const requestOptions = {
            method: 'DELETE',
        };
        const request = new Request(url, requestOptions);
        await fetch(request);
        dispatch({ type: 'DELETE_VENDOR', Id });
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
        case 'DELETE_VENDOR': {
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