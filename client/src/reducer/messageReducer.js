
export default function messageReducer(state = {}, action) {
    switch (action.type) {
        case 'SUCCESS_ACTION':
            return Object.assign({}, state, {success: action.response});
        case 'ERROR_ACTION':
            return Object.assign({}, state, {error: action.response});
        default:
            return state;
    }
}
