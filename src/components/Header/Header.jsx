import React from 'react';
import h from './Header.module.css';

const Header = (props) => {
    console.log(props);
    let authData = props.authData.isAuth ?
        <div className={h.loginInfo}>{`${props.authData.login}`}</div> :
        <div className={h.loginInfo}><a href='https://social-network.samuraijs.com/'>Login</a></div>
    return (
        <header className={h.header}>
            {authData}
        </header>
    );
}

export default Header;