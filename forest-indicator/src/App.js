import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/header.js';
import LeftView from './components/leftview.js';
import Middleview from './components/middleview.js';
import Rightview from './components/rightview.js';

class App extends Component {
  render() {


    

    return (
      <div className="container">

        <Header />

        <div className="row">

          <LeftView />

          <Middleview />

          <Rightview />

        </div>

      </div>
    );
  }
}

export default App;
