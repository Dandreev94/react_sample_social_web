import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state"

import {unregister} from "./serviceWorker";

let renderAllTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderAllTree();

store.subscribe(renderAllTree);

unregister();

