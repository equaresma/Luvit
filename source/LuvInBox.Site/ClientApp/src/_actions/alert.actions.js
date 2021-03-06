import { alertConstants } from '../_constants';

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    alert(message);
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {
    alert(message);
    return { type: alertConstants.ERROR, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}
