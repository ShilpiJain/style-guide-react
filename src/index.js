import React from 'react';
import ReactDOM from 'react-dom';
import "./../node_modules/bootstrap-4-required/src/css/bootstrap.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.sass';
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
