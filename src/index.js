import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/css/Montserrat.css'
import './assets/fonts/fontawesome-all.min.css'
import './assets/fonts/simple-line-icons.min.css'
import './assets/css/Login-Box-En.css'
import './assets/css/Profile-Card.css'
import './assets/css/user.css'
import {BrowserRouter} from "react-router-dom";
import ScrollToTop from "./components/ScrollTo";
import store from "./store";
import {Provider} from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <App/>
        </ScrollToTop>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();