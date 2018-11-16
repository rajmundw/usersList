import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducers/reducer'
import { createStore, compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.css';

// add to store middleware and devTools
const allStoreEnhance=compose(applyMiddleware(thunk),window.devToolsExtension && window.devToolsExtension())
//create store
const store=createStore(reducer,allStoreEnhance)


//render in DOM
ReactDOM.render(
    //add store to App
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
