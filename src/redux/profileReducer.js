const ADD_POST = 'ADD_POST';
const UPDATE_POST_MESSAGE = 'UPDATE-POST-MESSAGE';

let addPost = (state) => {
    state.posts.postItems.push(
        {
            id: 4,
            message: state.posts.postMessage
        }
    );
    state.posts.postMessage = '';

    return state;
}

let updatePostMessage = (state, msg) => {
    state.posts.postMessage = msg;

    return state;
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updatePostMessageActionCreator = (msg) => {
    return {
        type: UPDATE_POST_MESSAGE,
        message: msg
    }
}

let profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            return addPost(state);
        case UPDATE_POST_MESSAGE:
            return updatePostMessage(state, action.message);
        default:
            return state;
    }
}

export default profileReducer;