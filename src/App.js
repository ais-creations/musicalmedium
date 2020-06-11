import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/reusables/LoginForm"
import Login from "./components/reusables/LoginForm";
import LoginTest from './components/auth/Login';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/auth/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProfileCard from "./components/reusables/ProfileCard";
import LandingPage from "./components/pages/LandingPage";
import LearnPage from "./components/pages/LearnPage";
import TeachPage from "./components/pages/TeachPage";
import ProfilePage from "./components/pages/ProfilePage";
import LoginPage from "./components/pages/LoginPage";
import MainContent from "./components/MainContent";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}


function App() {
  return (
      <Provider store={store}>
    <div className="App">
      {/*<Router>*/}
      {/*  <Switch>*/}
      {/*    <Route path="/register">*/}
      {/*      <Register/>*/}
      {/*    </Route>*/}
      {/*    <Route path="/logintest">*/}
      {/*      <LoginTest/>*/}
      {/*    </Route>*/}
      {/*  </Switch>*/}
      {/*</Router>*/}
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
      </Provider>
  );
}

export default App;