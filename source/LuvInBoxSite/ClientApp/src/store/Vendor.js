const def_url = 'api/Vendor/';

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
            headers,
            body: JSON.stringify(Vendor)
        };
        const request = new Request(url, requestOptions);
        await fetch(request);
        dispatch({ type: 'SAVE_VENDOR', Vendor });
    },
    deleteVendor: VendorId => async (dispatch, getState) => {
        const url = def_url + VendorId;
        const requestOptions = {
            method: 'DELETE',
        };
        const request = new Request(url, requestOptions);
        await fetch(request);
        dispatch({ type: 'DELETE_VENDOR', VendorId });
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
                VendorId: action.VendorId,
                forceReload: true
            }
        }
        default:
            return state;
    }
};