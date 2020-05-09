import React from 'react';
import c from './Messages.module.css';
import Message from "./Message/Message";

const Messages = (props) => {
    let messageComponents = props.messageData.map((msg) => {
        return <Message message = {msg.data} />;
    })

    return (
        <div>
            {messageComponents}
        </div>
    );
}

export default Messages;