import React from 'react';
import {sendMessage, updateDialogMessage} from "../../redux/dialogReducer";
import {connect} from 'react-redux';
import Dialogs from "./Dialogs";

class DialogsContainer extends React.Component
{
    render() {
        return <Dialogs {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
       dialogs : state.dialogReducer.dialogs
    }
}

export default connect(mapStateToProps, {sendMessage, updateDialogMessage})(DialogsContainer)

