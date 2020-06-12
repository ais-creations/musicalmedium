import React from 'react';
import {Switch, Route} from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import LearnPage from "./pages/LearnPage";
import TeachPage from "./pages/TeachPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import PrivateRoute from "./private-route/PrivateRoute";
import Dashboard from "./dashboard/Dashboard";

const MainContent = () => (
  <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route path="/learn" component={LearnPage}/>
    <Route path="/teach" component={TeachPage}/>
    <Route path="/login" component={LoginPage}/>
    <Route path="/signup" component={SignUpPage}/>
      <Switch>
          <PrivateRoute exact path="/profile" component={ProfilePage}/>
          {/*<PrivateRoute exact path="/dashboard" component={Dashboard} />*/}
      </Switch>
  </Switch>
)

export default MainContent;