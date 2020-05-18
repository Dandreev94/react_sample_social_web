import React from 'react';
import c from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    let dialogsComponents = props.state.messages.map((userData) => {
        return <Dialog userId={userData.userId} userName={userData.userName}/>

    });
    let messagesComponents = props.state.messages.map((userData) => {
        return <Messages messageData = {userData.userMessages} />

    });

    return (
        <div className={c.dialogs}>
            <div>
                {dialogsComponents}
            </div>
            <div>
                {messagesComponents}
            </div>
        </div>
    );
}

export default Dialogs;