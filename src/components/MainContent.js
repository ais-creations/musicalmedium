import React from 'react';
import {Switch, Route} from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import LearnPage from "./pages/LearnPage";
import TeachPage from "./pages/TeachPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";

const MainContent = () => (
  <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route path="/learn" component={LearnPage}/>
    <Route path="/teach" component={TeachPage}/>
    <Route path="/profile" component={ProfilePage}/>
    <Route path="/login" component={LoginPage}/>
  </Switch>
)

export default MainContent;