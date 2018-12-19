
export default function messageReducer(state = {}, action) {
    switch (action.type) {
        case 'SUCCESS_ACTION':
            return {...state , success: action.payload};
        case 'ERROR_ACTION':
            return {...state, error: action.payload};
        default:
            return state;
    }
}
