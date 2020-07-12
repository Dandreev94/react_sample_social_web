import React from 'react';
import s from './Users.module.css';
import User from './User/User';


const Users = (props) => {
    let userComponents = props.usersData.users.map((user) => {
        return <User key={user.id} user={user} follow={props.follow} unfollow={props.unfollow}/>
    });

    let selectPage = (page) => {
        props.selectPage(page);
    }
    let pageCount = Math.ceil(props.usersData.totalCount/props.usersData.offset);
    let paginationArray = [];
    for (let i = 1; i <= pageCount; i++) {
        paginationArray.push(i);
    }
    let pagination = paginationArray.map((p) => {
        return props.usersData.currentPage === p ?
            <span className={s.selectedPage} onClick={ () => {selectPage(p)} }>{p}</span> :
            <span onClick={ () => {selectPage(p)} }>{p}</span>
    })
    return (
        <div className={s.usersPage}>
            <h2>Users</h2>
            {pagination}
            <div className={s.usersList}>
                {userComponents}
            </div>
        </div>
    );
}

export default Users;