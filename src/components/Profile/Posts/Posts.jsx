import React from 'react';
import p from './Posts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updatePostMessageActionCreator} from "../../../redux/profileReducer";

const Posts = (props) => {
    let state = props.store.getState();

    let postRef = React.createRef();

    let postComponents = state.profile.posts.postItems.map((post) => {
        return <Post avatar = {props.avatar} message = {post.message}/>;
    });

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let updatePostMessage = () => {
        let text = postRef.current.value;
        props.store.dispatch(updatePostMessageActionCreator(text));
    }

    return (
        <div className={p.posts}>
            <div>
                <h3>My posts</h3>
                {postComponents}
                <div>
                    <textarea onChange={updatePostMessage} ref={postRef} value={state.profile.posts.postMessage}/>
                </div>
                <div>
                    <button onClick={addPost}>Post</button>
                </div>
            </div>
        </div>
    );
}

export default Posts;