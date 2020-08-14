import React from 'react';
import s from './User.module.css';
import {NavLink} from "react-router-dom";
import {userApi} from "../../../api/socialNetworkApi";

const User = (props) => {
    let follow = () => {
        props.setIsFollowing(true, props.user.id);
        userApi.doFollow(props.user.id).then(response => {
            console.log(response);
            if(response.resultCode === 0) {
                props.follow(props.user.id);
                props.setIsFollowing(false, props.user.id);
            }
        })
    }

    let unfollow = () => {
        props.setIsFollowing(true, props.user.id);
        userApi.doUnfollow(props.user.id).then(response => {
            console.log(response);
            if(response.resultCode === 0) {
                props.unfollow(props.user.id);
                props.setIsFollowing(false, props.user.id);
            }
        })
    }


    return (
        <div className={s.user}>
            <div className={s.userInfo}>
                <div>
                    <NavLink to={`/profile/${props.user.id}`}>
                        {props.user.name}
                    </NavLink>
                </div>
                <div>
                    Country: RUS
                </div>
                <div>
                    Status: {props.user.status}
                </div>
                <div>
                    City: NSK
                </div>
            </div>
            {props.user.followed ?
                <button disabled={props.followingArray.some(id => id === props.user.id)}
                        className={s.followButton}
                        onClick={unfollow}>Unfollow</button> :
                <button disabled={props.followingArray.some(id => id === props.user.id)}
                        className={s.followButton}
                        onClick={follow}>Follow</button>}
        </div>
    );
}

export default User;