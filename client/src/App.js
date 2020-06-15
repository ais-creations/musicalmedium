import React from "react";
import "./App.css";
import "./components/reusables/LoginForm"
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import {connect} from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {setCurrentUser, logoutUser} from "./actions/authActions";
import PropTypes from "prop-types";
import baseData from "./reducers/baseData";
import {black} from "color-name";

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  choice(isAuthenticated) {
    if (isAuthenticated) {
      return (
        <h2>Logged in</h2>
      )
    } else {
      return (
        <h2>Logged out</h2>
      )
    }
  }

  render() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData === null || !userData.authenticated) {
      localStorage.setItem('userData', JSON.stringify(baseData));
    }
    return (
      <div className="App">
        <Header/>
        <MainContent/>
        {localStorage.getItem('userData')}
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(App);