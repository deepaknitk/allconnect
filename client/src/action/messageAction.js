

export function setSuccessMessage(response) {
    return {
        type: 'SUCCESS_ACTION',
        payload: response
    };
}

export function setErrorMessage(response) {
    return {
        type: 'ERROR_ACTION',
        payload: response
    };
}
