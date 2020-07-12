const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const UPLOAD_USERS = 'UPLOAD-USERS';
const SELECT_PAGE = 'SELECT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';

let initState = {
    users: [],
    currentPage: 1,
    totalCount: 100,
    offset: 20
};

let follow = (state, userId) => {
    let newUsers = state.users.map((user) => {
        return user.id === userId ? {...user, followed: true} : {...user};
    })

    return {...state, users: newUsers}
}

let unfollow = (state, userId) => {
    let newUsers = state.users.map((user) => {
        return user.id === userId ? {...user, followed: false} : {...user};
    })

    return {...state, users: newUsers}
}

let uploadUsers = (state, users) => {
    return {...state, users: users}
}

let selectPage = (state, page) => {
    return {...state, currentPage: page}
}

let setTotalCount = (state, count) => {
    return {...state, totalCount: count}
}

let usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW:
            return follow(state, action.userId);
        case UNFOLLOW:
            return unfollow(state, action.userId);
        case UPLOAD_USERS:
            return uploadUsers(state, action.users);
        case SELECT_PAGE:
            return selectPage(state, action.page);
        case SET_TOTAL_COUNT:
            return setTotalCount(state, action.count);
        default:
            return state
    }
}



export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}

export const uploadUsersAC = (users) => {
    return {
        type: UPLOAD_USERS,
        users: users
    }
}

export const selectPageAC = (page) => {
    return {
        type: SELECT_PAGE,
        page: page
    }
}

export const setTotalCountAC = (count) => {
    return {
        type: SET_TOTAL_COUNT,
        count: count
    }
}

export default usersReducer;