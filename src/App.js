import React from "react";
import "./App.css";
import {Layout, Header, Navigation, Content} from 'react-mdl';
import Main from "./components/main";
import {
  Link
} from "react-router-dom";
// import Login from "./components/Login";
// import Home from "./components/home";
// import Gigs from "./components/gigs";


function App() {

  return (

    <div className="dummy-big-content">
      <Layout>
        <Header className="header" title="Musical Medium" scroll>
          <Navigation >
            <Link to="/">Home</Link>
            <Link to="/feed">Feed</Link>
            <Link to="/gigs">Gigs</Link>
            <Link to="/musicians">Musicians</Link>
            <Link to="/profile">Profile</Link>
          </Navigation>
        </Header>
        <Content>
          <Main/>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
