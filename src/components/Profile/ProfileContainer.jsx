import React from 'react';
import Profile from "./Profile";
import {addPost, updatePostMessage, uploadProfileInfo} from "../../redux/profileReducer";
import {userApi} from "../../api/socialNetworkApi";
import {connect} from "react-redux";

class ProfileContainer extends React.Component
{
    componentDidMount() {
        userApi.getProfileInfo(this.props.match.params.id).then(response => this.props.uploadProfileInfo(response))
    }

    render() {
        return <Profile {...this.props}/>
    }
}



const mapStateToProps = (state) => {
    return {
        posts : state.profileReducer.posts,
        profile : state.profileReducer.profile
    }
}

const mapDispatchToProps = {
    addPost,
    updatePostMessage,
    uploadProfileInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
