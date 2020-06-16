import React from 'react';
import p from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {
    let postRef = React.createRef();

    let postComponents = props.posts.postItems.map((post) => {
        return <Post key = {post.id} avatar = {props.posts.avatar} message = {post.message}/>;
    });

    let addPost = () => {
        props.addPost();
    }

    let updatePostMessage = () => {
        let text = postRef.current.value;
        props.updatePostMessage(text);
    }

    return (
        <div className={p.posts}>
            <div>
                <h3>My posts</h3>
                {postComponents}
                <div>
                    <textarea onChange={updatePostMessage} ref={postRef} value={props.posts.postMessage}/>
                </div>
                <div>
                    <button onClick={addPost}>Post</button>
                </div>
            </div>
        </div>
    );
}

export default Posts;