import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";

let renderAllTree;
let store = {
    _state: {
        profile: {
            posts : {
                postItems: [
                    {id: 1, message: 'Hello world!' },
                    {id: 2, message: 'Hello world! Again!' },
                    {id: 3, message: 'Hello world! x3!' },
                ],
                postMessage: ''
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
            ],
            typingMessage: ''
        }
    },
    getState() {
        return this._state;
    },
    subscribe(callback) {
        renderAllTree = callback;
    },
    dispatch(action) {
        dialogReducer(this._state.dialogs, action);
        profileReducer(this._state.profile, action);

        renderAllTree(this._state);
    }
}

export default store;

