import React, { Component } from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import SimpleDropDown from './SimpleDropDown.js';
import MultipleSelector from './MultipleSelector.js';
import GlobalMethods from '../data/GlobalMethods.js'
import Data from '../data/Data'
import localizedStrings from '../data/Localization.js'
import '../App.css';

class LeftView extends Component {

  render() {

    return (
      <div class="col-md-3 greenBox">
        <h4>{localizedStrings.chooce}</h4>
        <SimpleDropDown 
          options={this.props.regionLevelData}
          title="Aluetaso" 
          updateValue={this.props.updateRegionLevelValue}
          selectValue={this.props.regionLevelValue}/>
        <br></br>
        <SimpleDropDown
          options={this.props.regionsData} 
          title="Alue"
          updateValue={this.props.updateRegionValue} 
          selectValue={this.props.regionValue}/>
        <br></br>
        <SimpleDropDown
          options={this.props.scenarioCollectionData} 
          title="Skenaariokokoelma"
          updateValue={this.props.updateScenarioCollectionValue} 
          selectValue={this.props.scenarioCollectionValue}/>
        <br></br>
        <MultipleSelector 
          choices = {this.props.scenariosData} 
          title="Skenaariot" 
          updateValue={this.props.updateScenarioValue} 
          selectValue={this.props.scenarioValue}/>
        <br></br>
        <MultipleSelector 
          choices = {this.props.timePeriodData} 
          title="Ajankohta"  
          updateValue={this.props.updateTimePeriodValue} 
          selectValue={this.props.timePeriodValue}/>

      </div>
    )
  }
}

export default LeftView