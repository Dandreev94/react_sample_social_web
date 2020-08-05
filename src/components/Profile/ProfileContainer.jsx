import React from 'react';
import Profile from "./Profile";
import {addPost, updatePostMessage, uploadProfileInfo} from "../../redux/profileReducer";
import {connect} from "react-redux";
import * as axios from "axios";

class ProfileContainer extends React.Component
{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.id}`)
            .then((response => {
                this.props.uploadProfileInfo(response.data);
            }))
    }

    render() {
        return <Profile profile={this.props.profile}
                        posts={this.props.posts}
                        addPost={this.props.addPost}
                        updatePostMessage={this.props.updatePostMessage}/>
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
