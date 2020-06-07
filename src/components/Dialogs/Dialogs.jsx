import React from 'react';
import c from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";
import {sendMessageActionCreator, updateDialogMessageActionCreator} from "../../redux/dialogReducer";

const Dialogs = (props) => {
    let state = props.store.getState();

    let dialogsComponents = state.dialogs.messages.map((userData) => {
        return <Dialog userId={userData.userId} userName={userData.userName}/>

    });
    let messagesComponents = state.dialogs.messages.map((userData) => {
        return <Messages messageData = {userData.userMessages} />

    });

    let textareaRef = React.createRef();

    let updateMessageBody = () => {
        props.store.dispatch(updateDialogMessageActionCreator(textareaRef.current.value));
    }

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator(1));
    }

    return (
        <div className={c.dialogs}>
            <div>
                {dialogsComponents}
            </div>
            <div>
                {messagesComponents}
            </div>
            <div>
                <div>
                    <textarea placeholder='Enter your message' ref={textareaRef} value={state.dialogs.typingMessage} onChange={updateMessageBody}></textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;