//import config from 'config';
import { authHeader } from '../_helpers';

export const userService = {
    login,
    logout
};

async function login(username, password) {
    var login = {
        "name": username,
        "password": password,
        "type": 0,
        "remoteAddress": "",
        "isActive": true
    };
     const requestOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(login)
     };

    return await fetch('api/Login/', requestOptions)
         .then(handleResponse)
         .then(user => {
             // store user details and jwt token in local storage to keep user logged in between page refreshes
             localStorage.setItem('user', JSON.stringify(user));

             return user;
         });
}

async function logout(username) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username })
    };

    return await fetch(`api/Login/Logoff?username=${username}`, requestOptions)
        .then(handleResponse)
        .then(res => {
            // remove user from local storage to log user out
            localStorage.removeItem('user');
            localStorage.removeItem('cart');
            return res;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //let l = location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
