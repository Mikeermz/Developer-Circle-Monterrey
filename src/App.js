import React, { Component } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

class App extends Component {

  state = {
    fields: {}
  }

  render() {
    return (
      <div className="App">
        <Form />
      </div>
    );
  }
}

export default App;
