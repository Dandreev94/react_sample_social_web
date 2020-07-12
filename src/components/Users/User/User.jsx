import React from 'react';
import s from './User.module.css';

const User = (props) => {
    let follow = () => {
        props.follow(props.user.id);
    }

    let unfollow = () => {
        props.unfollow(props.user.id);
    }


    return (
        <div className={s.user}>
            <div className={s.userInfo}>
                <div>
                    {props.user.name}
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