// Libraries
import React, { Component } from 'react';
// Styling
import './App.css';
// Components

import Home from './components/pages/Home';

import Footer from './components/layout/Footer';
class App extends Component {
  render() {
    return (
        <div className="App">
          <Home/>
          <Footer />
        </div>
    );
  }
}
export default App;
