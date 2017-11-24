import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/header.js';
import Leftview from './components/left-view.js';
import Middleview from './components/middle-view.js';
import Rightview from './components/right-view.js';

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
