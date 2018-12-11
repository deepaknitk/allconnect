import { combineReducers } from 'redux';
import Auth from './AuthReducer';
import messageReducer from './messageReducer';
export default combineReducers({
    Auth: Auth,
    message: messageReducer
});
