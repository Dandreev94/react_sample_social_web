import React from 'react';
import s from './Users.module.css';
import User from './User/User';
import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator";

const Users = (props) => {
    let userComponents = props.usersData.users.map((user) => {
        return <User key={user.id} user={user} follow={props.follow} unfollow={props.unfollow}/>
    });

    if (!props.usersData.isLoaded) {
        return (
            <div className={s.preloaderPosition}>
                <Preloader />
            </div>
        );
    }

    return (
        <div className={s.usersPage}>
            <h2>Users</h2>
            <Paginator
                limit={props.usersData.limit}
                offset={props.usersData.offset}
                totalCount={props.usersData.totalCount}
                currentPage={props.usersData.currentPage}
                selectPage={props.selectPage}
                setOffset={props.setOffset}/>
            <div className={s.usersList}>
                {userComponents}
            </div>
        </div>
    );
}

export default Users;