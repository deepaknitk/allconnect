import axios from 'axios';
import * as messageAction from './messageAction';

export const signUpAction = (signUpReqBody) => dispatch => {
    console.log(signUpReqBody);
    axios.post('users/create', signUpReqBody)
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
