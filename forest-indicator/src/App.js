import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/header.js';
import LeftView from './components/leftview.js';
import Middleview from './components/middleview.js';
import Rightview from './components/rightview.js';
import GlobalMethods from './data/GlobalMethods.js'
import {changeLang, getScenarioCollection} from './data/Data'
import localizedStrings from './data/Localization.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      language : false,
      indicatorCategoriesData: []
    };
    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.renewData = this.renewData.bind(this);
  }

  toggleLanguage() {
    debugger;
    if (localizedStrings.getLanguage() == "fi") {
      localizedStrings.setLanguage("en");
      
      
    } else {
      localizedStrings.setLanguage("fi");
      this.setState({language : false})
    }
    this.renewData();
}
renewData(){
  changeLang(localizedStrings.getLanguage());
  getScenarioCollection(6, 24).then(result => {
      this.setState({
          indicatorCategoriesData: GlobalMethods.getIndicatorCategories(result)
      })
      console.log(this.state.indicatorCategoriesData);
  })

}

  render() {
    
    return (
      <div className="container">

        <Header />

        <div className="row">

          <LeftView />

          <Middleview />

          <Rightview />

        </div>
        <button type="button" className="btn btn-primary" onClick={this.toggleLanguage}>{ localizedStrings.languageOnSwitch }Fi/En</button>
      </div>
    );
  }
}

export default App;
