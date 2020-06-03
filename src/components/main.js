import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from "./home";
import Feed from "./feed";
import Gigs from "./gigs";
import Musicians from "./musicians";
import Profile from "./profile";
import Login from "./Login";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/feed" component={Feed}/>
    <Route path="/gigs" component={Gigs}/>
    <Route path="/musicians" component={Musicians}/>
    <Route path="/profile" component={Profile}/>
    <Route path="/login" component={Login}/>
  </Switch>
)

export default Main;