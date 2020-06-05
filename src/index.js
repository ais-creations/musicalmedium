import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/bootstrap/css/bootstrap.min.css'
import './https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i'
import './https://fonts.googleapis.com/css?family=Open+Sans'
import './assets/fonts/fontawesome-all.min.css'
import './assets/fonts/simple-line-icons.min.css'
import './https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.css'
import './assets/css/styles.min.css'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();