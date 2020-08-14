import React from 'react';
import c from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    let textareaRef = React.createRef();
    let dialogsComponents = props.dialogs.messages.map((userData) => {
        return <Dialog key={userData.userId} userId={userData.userId} userName={userData.userName}/>

    });
    let messagesComponents = props.dialogs.messages.map((userData) => {
        return <Messages key={userData.userId} messageData = {userData.userMessages} />

    });

    let updateMessageBody = () => {
        props.updateDialogMessage(textareaRef.current.value);
    }

    let sendMessage = () => {
        props.sendMessage();
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
                    <textarea placeholder='Enter your message' ref={textareaRef} value={props.dialogs.typingMessage} onChange={updateMessageBody}></textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;