import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/header.js';
import Leftwing from './components/leftwing.js';
import Middleview from './components/middle-view.js';
import Rightwing from './components/rightwing.js';

class App extends Component {
  render() {
    return (
<div className="container">

<Header/>

<div class="row">

<Leftwing/>

<Middleview/>

<Rightwing/>

  </div>

</div>
    );
  }
}

export default App;
