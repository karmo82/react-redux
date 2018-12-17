import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap';

import App from './App';
import * as serviceWorker from './serviceWorker';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import * as usersActions from './actions/usersActions';


const store = configureStore();
store.dispatch(usersActions.fetchUsers());

const app = 
<Provider store={store} >
<App />
</Provider>

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
