import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';

// Store
import initialState from './reducers/initialState';
import configureStore from './store/configure';

// store initialization
export const store = configureStore(initialState);


ReactDOM.render(
    <Provider store={store}>
        <App store={store}/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
