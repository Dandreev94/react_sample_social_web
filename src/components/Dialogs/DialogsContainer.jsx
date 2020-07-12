import React from 'react';
import {sendMessageActionCreator, updateDialogMessageActionCreator} from "../../redux/dialogReducer";
import {connect} from 'react-redux';
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
    return {
       dialogs : state.dialogReducer.dialogs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage : () => {
            dispatch(sendMessageActionCreator(1))
        },
        updateMessageBody : (text) => {
            dispatch(updateDialogMessageActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;