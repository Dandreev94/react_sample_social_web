import React from 'react';
import p from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {
    return (
        <div className={p.posts}>
            <div>
                <h3>
                    My posts
                </h3>
                <Post avatar = {props.avatar} message = 'Hello world!'/>
                <Post avatar = {props.avatar} message = "It's me, IT engineer!"/>
                <Post avatar = {props.avatar} message = "I'm learning React JS!"/>
            </div>
        </div>
    );
}

export default Posts;