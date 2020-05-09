import React from 'react';
import n from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <NavLink to='/profile' className={n.link} activeClassName={n.activeLink}>Profile</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/dialogs' className={n.link} activeClassName={n.activeLink}>Messages</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/news' className={n.link} activeClassName={n.activeLink}>News</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/music' className={n.link} activeClassName={n.activeLink}>Music</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/settings' className={n.link} activeClassName={n.activeLink}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;