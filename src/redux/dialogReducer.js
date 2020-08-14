const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_DIALOG_MESSAGE = 'UPDATE-DIALOG-MESSAGE';

let initState = {
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
};

export const sendMessage = (userId) => {
    return {
        type: SEND_MESSAGE,
        userId: userId
    }
}

export const updateDialogMessage = (msg) => {
    return {
        type: UPDATE_DIALOG_MESSAGE,
        message: msg
    }
}

let dialogReducer = (state = initState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let copyMsg = state.dialogs.messages.map((item) => {
                let newItem = {...item};
                newItem.userMessages = item.userId === action.userId ?
                    [...item.userMessages, {id: 3, data: state.dialogs.typingMessage}] : [...item.userMessages]

                return newItem;
            })

            return {
                dialogs: {
                    messages: copyMsg,
                    typingMessage: ''
                }
            }
        case UPDATE_DIALOG_MESSAGE:
            return {
                dialogs: {
                    messages: [...state.dialogs.messages],
                    typingMessage: action.message
                }
            }
        default:
            return state
    }
}

export default dialogReducer;