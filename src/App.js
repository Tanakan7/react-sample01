import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hoge from "./component/Hoge";
import Ref from "./component/Ref";
// import TimerComponent from "./component/TimerComponent";
// import CountDown from "./component/CountDown";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hoge />
        <Ref val="first" />
        <Ref val="second" />
        {/* <TimerComponent />
        <CountDown /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
