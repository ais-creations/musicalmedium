import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/reusables/Login"
import Login from "./components/reusables/Login";
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

function App() {
  return (
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
  );
}

export default App;