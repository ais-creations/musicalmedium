import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from "./components/main";
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="content">
      <Layout>
        <Header className="header" title="Pink Fluffy Unicorn" scroll>
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/feed">Feed</Link>
            <Link to="/gigs">Gigs</Link>
            <Link to="/musicians">Musicians</Link>
            <Link to="/profile">Profile</Link>
          </Navigation>
        </Header>
        <Content>
          <div className="page-content"/>
          <p>Musical Medium</p>
          <Main/>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
