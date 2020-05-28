import React from "react";
import "./App.css";
import {Layout, Header, Navigation, Content} from 'react-mdl';
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
