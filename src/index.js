import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/reduxStore";
import {Provider} from "react-redux";

import {unregister} from "./serviceWorker";

let renderAllTree = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store} >
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderAllTree(store);

store.subscribe(() => {
    renderAllTree(store);
});

unregister();

