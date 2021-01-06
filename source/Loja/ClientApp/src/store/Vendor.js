const initialState = {
    vendors: [],
    loading: false,
    errors: {},
    forceReload: false
}

export const actionCreators = {
    requestVendors: () => async (dispatch, getState) => {
        const url = 'api/Vendor/';
        const response = await fetch(url);
        const vendors = await response.json();

        dispatch({ type: 'FETCH_VENDORS', vendors });
    },
    saveVendor: vendor => async (dispatch, getState) => {

        const url = 'api/Vendor/';
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const requestOptions = {
            method: 'POST',
            headers,
            body: JSON.stringify(vendor)
        };
        const request = new Request(url, requestOptions);
        await fetch(request);
        dispatch({ type: 'SAVE_VENDOR', vendor });
    },
    deleteVendor: id => async (dispatch, getState) => {
        const url = 'api/Vendor/' + id;
        const requestOptions = {
            method: 'DELETE',
        };
        const request = new Request(url, requestOptions);
        await fetch(request);
        dispatch({ type: 'DELETE_VENDOR', id });
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    switch (action.type) {
        case 'FETCH_VENDORS': {
            return {
                ...state,
                vendors: action.vendors,
                loading: false,
                errors: {},
                forceReload: false
            }
        }
        case 'SAVE_VENDOR': {
            return {
                ...state,
                vendors: Object.assign({}, action.vendor),
                forceReload: true
            }
        }
        case 'DELETE_VENDOR': {
            return {
                ...state,
                id: action.id,
                forceReload: true
            }
        }
        default:
            return state;
    }
};