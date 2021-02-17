const def_url = 'api/login/';

const initialState = {
    loading: false,
    errors: {},
    forceReload: false
}

export const actionCreators = {
    doLogin: Login => async (dispatch, getState) => {
        const url = def_url;
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(Login)
        };
        const request = new Request(url, requestOptions);
        await fetch(request)
            .then(data => {
                localStorage.setItem("token", data.token)
            }).catch(err => {
                let msg = err;
                console.log("Error Reading data " + msg);
            });
        dispatch({ type: 'SAVE_LOGIN', Login });
    },
    changePass: Login => async (dispatch, getState) => {
        const token = localStorage.token;
        if (token) {
            const url = def_url;
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');

            const requestOptions = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ${token}'
                },
                body: JSON.stringify(Login)
            };
            const request = new Request(url, requestOptions);
            await fetch(request)
                .then(data => {
                    let msg = data.message;
                    console.log("Msg: " + msg);
                }).catch(err => {
                    let msg = err;
                    console.log("Error Reading data " + msg);
                });
            dispatch({ type: 'SAVE_LOGIN', Login });
        }
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.typev === "DO_LOGIN") {
        return {
            ...state,
            Login: Object.assign({}, action.Login),
            forceReload: true
        }
    }
};