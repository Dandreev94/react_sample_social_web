import React from 'react';
import p from './Personal.module.css';

const Personal = (props) => {
    //TODO: make container component and make requests to through API
    return (
        <div className={p.personal}>
            <img className={p.avatar} src={props.avatar} alt='#'/>
            <div className={p.mainInfo}>
                <div>
                    <span>Denis Andreev</span>
                </div>
                <div>
                    <span>Age 26</span>
                </div>
                <div>
                    <span>Online</span>
                </div>
            </div>
        </div>
    );
}

export default Personal;