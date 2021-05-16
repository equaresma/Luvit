import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    getUnobstrutive,
    setUnobstrutive
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    if (user.userType == 2)
                        history.push('/');
                    else
                        history.push('/adm');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) {
        return { type: userConstants.LOGIN_SUCCESS, user }
    }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    return dispatch => {
        userService.logout()
            .then(
                user => {
                    dispatch(success(user));
                    if (user.userType == 2)
                        history.push('/');
                    else
                        history.push('/adm');
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function success() {
        return { type: userConstants.LOGOUT }
    }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function setUnobstrutive(value) {
    userService.setUnobstrutive(value).then(x => {
        history.go(0);
        //history.push('/');
    });

    return { type: userConstants.SET_UNOBSTRUTIVE, value };
}

function getUnobstrutive() {
    return dispatch => {
        userService.getUnobstrutive()
            .then(
                value => {
                    dispatch(success(value));
                }
            );
    };

    function success(value) { return { type: userConstants.GET_UNOBSTRUTIVE, value } }
}
