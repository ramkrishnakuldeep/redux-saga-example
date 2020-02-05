import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from "react-redux";

import { createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from 'redux-saga';



import {reducer} from './reducers'
import {watcherSaga } from './sagas'


// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


let store = createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);


// run the saga
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();