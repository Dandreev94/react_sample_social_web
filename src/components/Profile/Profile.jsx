import React from 'react';
import c from './Profile.module.css';
import Personal from "./Personal/Personal";
import Posts from "./Posts/Posts";

const Profile = (props) => {
    console.log(props.profile);

    let background = props.profile.photos.large ?
        props.profile.photos.large : 'https://images.wallpaperscraft.ru/image/gory_vershiny_snezhnyj_168351_1920x1080.jpg';

    return (
        <div>
            <img className={c.backgroundImage} src={background} alt='#'/>
            <Personal profile={props.profile}/>
            <Posts posts={props.posts}
                   addPost={props.addPost}
                   updatePostMessage={props.updatePostMessage}/>
        </div>
    );
}

export default Profile;