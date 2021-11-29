// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Component} from "react";

class Button extends Component {
  render() {
    return <button className="button_add" />
  }
}
function App() {
  return (

    <div className="App ">

      <header className="App-header">

        {/*<img src={logo} className="App-logo" alt="logo" />*/}

        {/*<button>+</button>*/}
        <div> + Добавить заметку
        </div>
          <div> ____________________________________________
          </div>
          <div> ____________________________________________
          </div>
          <div> ____________________________________________
          </div>
      </header>
    </div>
  );
}

export default App;
