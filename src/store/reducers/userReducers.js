import actionTypes from '../actions/actionTypes';

var initialState = {
    isLoggedIn: false,
}

const userReducer = (state = initialState, action) => {
    switch (action) {
        case actionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                isLoggedIn: true,
            }
        };
        default: return state;
    }
}

export default userReducer;