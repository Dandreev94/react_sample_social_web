import React from 'react';
import n from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div>
                <a href='https://habr.com/'>Profile</a>
            </div>
            <div>
                <a href='https://habr.com/'>Messages</a>
            </div>
            <div>
                <a href='https://habr.com/'>News</a>
            </div>
            <div>
                <a href='https://habr.com/'>Music</a>
            </div>
            <div>
                <a href='https://habr.com/'>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;