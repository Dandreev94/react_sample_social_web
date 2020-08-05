const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

let initState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

let authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}


export const setAuthData = (data) => {
    return {
        type: SET_AUTH_USER_DATA,
        data: data
    }
}

export default authReducer;