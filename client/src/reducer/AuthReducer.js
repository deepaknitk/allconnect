export default (state = {}, action) => {
    console.log('SET_SIGN_UP');
    switch (action.type) {
        case 'SET_SIGN_UP':
            return {...state, signUp: action.payload};

        case 'SET_USER_DETAILS' :
            return {...state, isAuthnticated: true, currentUser: action.payload}
        default:
            return state
    }
}
