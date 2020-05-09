import React from 'react';
import c from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let route = `/dialogs/${props.userId}`;
    return (
        <div>
            <NavLink to={route}>{`${props.userName}`}</NavLink>
        </div>
    );
}

export default Dialog;