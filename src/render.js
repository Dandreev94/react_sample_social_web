import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./redux/state";
import {updatePostMessage} from "./redux/state";

export const renderAllTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updatePostMessage={updatePostMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
