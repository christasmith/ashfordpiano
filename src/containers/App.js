import React, { Component } from 'react';
import '../css/App.css';
import '../css/index.css';
import Banner from '../components/Banner.js';
import Nav from '../components/Nav.js';
import SectionB from '../components/SectionB.js';
import SectionC from '../components/SectionC.js';
import Form from '../components/Form.js';
import Footer from '../components/Footer.js';



import 'font-awesome/css/font-awesome.min.css'






class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav> </Nav>
          <Banner/>
          <SectionB/>
          <SectionC/>
          <Form/>
          <Footer/>
      </div>
    );
  }
}

export default App;
