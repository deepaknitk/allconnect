import Axios from 'axios';
import * as messageAction from './messageAction';

export const signUpAction = (signUpReqBody) => dispatch => {
    console.log(signUpReqBody);
    Axios.post('users/create', signUpReqBody)
        .then(response => {
            if(response.data.success) {
                dispatch({
                    type: 'SET_SIGN_UP',
                    payload: response.data
                })
            }

            else {
                dispatch(messageAction.setErrorMessage('user not saved'));
            }
        })
        .catch(error => {
            dispatch(messageAction.setErrorMessage('Something went wrong'));
        });
};

export const loginAction = (loginReqBody) => dispatch => {
    Axios.post('users/login', loginReqBody)
        .then(response => {
            if(response.data.success) {
                dispatch({
                    type: 'SET_USER_DETAILS',
                    payload: response.data.data.userEmail
                })
            }
            else {
                dispatch(messageAction.setErrorMessage('user Id or Password is invalid'));
            }
        })
        .catch(error => {
            dispatch(messageAction.setErrorMessage('Something went wrong'));
        });
};
