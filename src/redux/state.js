import {renderAllTree} from "../render";

let state = {
    profile: {
        posts : {
            postItems: [
                {id: 1, message: 'Hello world!' },
                {id: 2, message: 'Hello world! Again!' },
                {id: 3, message: 'Hello world! x3!' },
            ],
            postMessage: 'HUI'
        }
    },
    dialogs: {
        messages: [
            {
                userId: 1,
                userName: 'Denis',
                userMessages: [
                    {
                        messageId: 1,
                        data: 'Hello, Denis!'
                    },
                    {
                        messageId: 2,
                        data: 'How are you?'
                    }
                ]
            },
            {
                userId: 2,
                userName: 'Ivan',
                userMessages: [
                    {
                        messageId: 1,
                        data: 'Hello, Ivan!'
                    },
                    {
                        messageId: 2,
                        data: 'How are you doing?'
                    }
                ]
            }
        ]
    }
}

export let addPost = () => {
    state.profile.posts.postItems.push(
        {
            id: 4,
            message: state.profile.posts.postMessage
        }
    );
    renderAllTree(state);
    state.profile.posts.postMessage = '';
}

export let updatePostMessage = (msg) => {
    state.profile.posts.postMessage = msg;
    renderAllTree(state);
}

export default state;

