import React from 'react';
import c from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";

const Dialogs = () => {
    let dialogsData = [
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
        },
    ];

    let dialogsComponents = dialogsData.map((userData) => {
        return <Dialog userId={userData.userId} userName={userData.userName}/>

    });
    let messagesComponents = dialogsData.map((userData) => {
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