import React from 'react';
import Posts from './Posts'
import {addPostActionCreator, updatePostMessageActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts : state.profileReducer.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost : () => {
            dispatch(addPostActionCreator());
        },
        updatePostMessage : (text) => {
            dispatch(updatePostMessageActionCreator(text));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
