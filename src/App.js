import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/Login"

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Treble</p>
        </header>
      </div>
  );
}

export default App;