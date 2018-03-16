import React, { Component } from 'react';
import '../css/App.css';
import '../css/index.css';
import Banner from '../components/Banner.js';
import Nav from '../components/Nav.js';
import SectionA from '../components/SectionA.js';
import SectionB from '../components/SectionB.js';
import Form from '../components/Form.js';

import 'font-awesome/css/font-awesome.min.css'






class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav> </Nav>
            <Banner></Banner>
          <SectionA></SectionA>
          <SectionB></SectionB>
          <SectionB></SectionB>
          <Form></Form>
      </div>
    );
  }
}

export default App;
