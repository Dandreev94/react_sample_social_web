import React from 'react';
import p from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {
    let postsData = [
        {id: 1, message: 'Hello world!' },
        {id: 2, message: 'Hello world! Again!' },
        {id: 2, message: 'Hello world! x3!' },
    ];

    let postComponents = postsData.map((post) => {
        return <Post avatar = {props.avatar} message = {post.message}/>;
    });

    return (
        <div className={p.posts}>
            <div>
                <h3>My posts</h3>
                {postComponents}
            </div>
        </div>
    );
}

export default Posts;