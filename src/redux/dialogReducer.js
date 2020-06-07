const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_DIALOG_MESSAGE = 'UPDATE-DIALOG-MESSAGE';

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

let dialogReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return sendMessage(state, action.userId);
        case UPDATE_DIALOG_MESSAGE:
            return updateDialogMessage(state, action.message);
    }
}

export default dialogReducer;