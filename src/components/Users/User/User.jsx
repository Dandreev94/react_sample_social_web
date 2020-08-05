import React from 'react';
import s from './User.module.css';
import {NavLink} from "react-router-dom";
import {userApi} from "../../../api/socialNetworkApi";

const User = (props) => {
    let follow = () => {
        userApi.doFollow(props.user.id).then(response => {
            console.log(response);
            if(response.resultCode === 0) {
                props.follow(props.user.id);
            }
        })
    }

    let unfollow = () => {
        userApi.doUnfollow(props.user.id).then(response => {
            console.log(response);
            if(response.resultCode === 0) {
                props.unfollow(props.user.id);
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
                <button className={s.followButton} onClick={unfollow}>Unfollow</button> :
                <button className={s.followButton} onClick={follow}>Follow</button>}
        </div>
    );
}

export default User;