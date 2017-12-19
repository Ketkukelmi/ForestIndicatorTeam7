import React, { Component } from 'react'
import 'react-select/dist/react-select.css';
import SimpleDropDown from './SimpleDropDown.js';
import MultipleSelector from './MultipleSelector.js';
import localizedStrings from '../data/Localization.js'
import '../App.css';

class LeftView extends Component {

  render() {

    return (
      <div className="col-md-3 greenBox">
        <h4>{localizedStrings.chooce}</h4>
        <SimpleDropDown 
          options={this.props.regionLevelData}
          title={localizedStrings.region}
          updateValue={this.props.updateRegionLevelValue}
          selectValue={this.props.regionLevelValue}/>
        <br></br>
        <SimpleDropDown
          options={this.props.regionsData} 
          title={localizedStrings.forestyCenter}
          updateValue={this.props.updateRegionValue} 
          selectValue={this.props.regionValue}/>
        <br></br>
        <SimpleDropDown
          options={this.props.scenarioCollectionData} 
          title={localizedStrings.scenarioCollection}
          updateValue={this.props.updateScenarioCollectionValue} 
          selectValue={this.props.scenarioCollectionValue}/>
        <br></br>
        <MultipleSelector 
          choices = {this.props.scenariosData} 
          title={localizedStrings.scenarios} 
          updateValue={this.props.updateScenarioValue} 
          selectValue={this.props.scenarioValue}/>
        <br></br>
        <SimpleDropDown 
          options = {this.props.timePeriodData} 
          title={localizedStrings.yearsPeriods}
          updateValue={this.props.updateTimePeriodValue} 
          selectValue={this.props.timePeriodValue}/>

      </div>
    )
  }
}

export default LeftView