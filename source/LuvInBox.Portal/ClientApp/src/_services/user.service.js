export const userService = {
    login,
    logout,
    setUnobstrutive,
    getUnobstrutive
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

async function logout() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (!user)
        return;

    if (user.userType == 2) {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        return await fetch(`api/Login/Logoff?username=${user.Username}`, requestOptions)
            .then(handleResponse)
            .then(res => {
                //remove user from local storage to log user out
                localStorage.removeItem('user');
                localStorage.removeItem('cart');
                return res;
            });
    } else {
        let promisse = new Promise((resolve) => {
            setTimeout(() => {
                localStorage.removeItem('user');
                resolve(user);
            }, 200);
        });

        return promisse.then(user => {
            return user;
        }, function (error) {
            return error;
        });

    }
}

async function setUnobstrutive(value) {
    let promisse = new Promise((resolve, reject) => {
        setTimeout(() => {
            localStorage.setItem('isUnobstrutive', value);
            resolve(value);
        }, 200);
    });

    return promisse.then(isUnobstrutive => {
        return isUnobstrutive;
    }, function (error) {
        return error;
    });
}

async function getUnobstrutive() {
    let adm = window.location.pathname.includes("/adm");

    if (adm)
        return true;

    let isUnobstrutive = JSON.parse(localStorage.getItem('isUnobstrutive'));

    let promisse = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(isUnobstrutive);
        }, 200);
    });

    return promisse.then(isUnobstrutive => {
        return isUnobstrutive;
    }, function (error) {
        return error;
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
