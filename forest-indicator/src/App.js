import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/header.js';
import Leftview from './components/leftwing.js';
import Middleview from './components/middlewing.js';
import Rightview from './components/rightwing.js';

class App extends Component {
  render() {
    return (
<div className="container">

<Header/>

<div class="row">

<Leftview/>

<Middleview/>

<Rightview/>

  </div>

</div>
    );
  }
}

export default App;
