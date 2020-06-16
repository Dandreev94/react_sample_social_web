const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_DIALOG_MESSAGE = 'UPDATE-DIALOG-MESSAGE';

let initState = {
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
};

let sendMessage = (state, userId) => {
    state.messages[userId].userMessages.push(
        {
            id: 3,
            data: state.typingMessage
        }
    );
    state.typingMessage = '';

    return state;
}

let updateDialogMessage = (state, msg) => {
    state.typingMessage = msg;

    return state;
}

export const sendMessageActionCreator = (userId) => {
    return {
        type: SEND_MESSAGE,
        userId: userId
    }
}

export const updateDialogMessageActionCreator = (msg) => {
    return {
        type: UPDATE_DIALOG_MESSAGE,
        message: msg
    }
}

let dialogReducer = (state = initState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return sendMessage(state, action.userId);
        case UPDATE_DIALOG_MESSAGE:
            return updateDialogMessage(state, action.message);
        default:
            return state
    }
}

export default dialogReducer;