import React, { Component } from 'react';
import Form from './components/Form.js';
import Password from './components/Password.js';
// CSS
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Form />
        <hr />
        <Password />
      </div>
    );
  }
}

export default App;
