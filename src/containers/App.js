import React, { Component } from 'react';
import '../css/App.css';
import Nav from '../components/Nav.js';
import section1 from '../components/section1.js';





class App extends Component {
  render() {
    return (
      <div className="App">
            <Nav></Nav>
            <section1></section1>
      </div>
    );
  }
}

export default App;
