const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW';
const UPLOAD_USERS = 'UPLOAD-USERS';
const SELECT_PAGE = 'SELECT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_OFFSET = 'SET-OFFSET';
const IS_LOADED = 'IS-LOADED';
const IS_FOLLOWING_IN_PROGRESS = 'IS-FOLLOWING-IN-PROGRESS';

let initState = {
    users: [],
    currentPage: 1,
    totalCount: 1,
    limit: 20,
    offset: 1,
    isLoaded: false,
    isFollowingInProgress: false,
    followingInProgressArray: []
};

let usersReducer = (state = initState, action) => {
    let newUsers = [];
    switch (action.type) {
        case FOLLOW:
            newUsers = state.users.map((user) => {
                return user.id === action.userId ? {...user, followed: true} : {...user};
            })

            return {...state, users: newUsers}
        case UNFOLLOW:
            newUsers = state.users.map((user) => {
                return user.id === action.userId ? {...user, followed: false} : {...user};
            })

            return {...state, users: newUsers}
        case UPLOAD_USERS:
            return {...state, users: action.users}
        case SELECT_PAGE:
            return {...state, currentPage: action.page}
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.count}
        case SET_OFFSET:
            return {...state, offset: state.offset + action.offset}
        case IS_LOADED:
            return {...state, isLoaded: action.isLoaded}
        case IS_FOLLOWING_IN_PROGRESS:
            return {...state,
                    isFollowingInProgress: action.isFollowingInProgress,
                    followingInProgressArray: action.isFollowingInProgress ?
                            [...state.followingInProgressArray, action.userId] :
                            state.followingInProgressArray.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}



export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const uploadUsers = (users) => {
    return {
        type: UPLOAD_USERS,
        users
    }
}

export const selectPage = (page) => {
    return {
        type: SELECT_PAGE,
        page
    }
}

export const setTotalCount = (count) => {
    return {
        type: SET_TOTAL_COUNT,
        count
    }
}

export const setOffset = (offset) => {
    return {
        type: SET_OFFSET,
        offset
    }
}

export const setIsLoaded = (isLoaded) => {
    return {
        type: IS_LOADED,
        isLoaded
    }
}

export const setIsFollowingInProgress = (isFollowingInProgress, userId) => {
    return {
        type: IS_FOLLOWING_IN_PROGRESS,
        isFollowingInProgress,
        userId
    }
}

export default usersReducer;