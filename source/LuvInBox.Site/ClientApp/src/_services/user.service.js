//import config from 'config';
import { authHeader } from '../_helpers';

export const userService = {
    login,
    logout
};

async function login(username, password) {
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, password })
    // };

    // return await fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    //     .then(handleResponse)
    //     .then(user => {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         localStorage.setItem('user', JSON.stringify(user));

    //         return user;
    //     });
    let promisse = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username == "edu" && password == "123") {
                const u = { firstName: "Eduardo", lastName: "Quaresma", token: 'abc' };
                localStorage.setItem('user', JSON.stringify(u));
                resolve(u);
            } else
                resolve(null);
        }, 500);
    });

    const user = await promisse;
    return user;
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
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
