import React from 'react';
import c from './Profile.module.css';

const Profile = () => {
    return (
        <div className={c.content}>
            <div>
                ava+desc
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    Old post 1
                </div>
                <div>
                    Old post 2
                </div>
            </div>
        </div>
    );
}

export default Profile;