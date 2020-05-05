import React from 'react';
import p from './Post.module.css';

const Post = (props) => {
    return (
        <div className={p.post}>
            <div className={p.message}>
                <img className={p.avatar} src={props.avatar} alt="#"/>
                <div>
                    {props.message}
                </div>
            </div>
        </div>
    );
}

export default Post;