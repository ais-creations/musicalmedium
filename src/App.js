import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/Login"
import Login from "./components/Login";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Treble</p>
        </header>

        <Login/>
      </div>
  );
}

export default App;