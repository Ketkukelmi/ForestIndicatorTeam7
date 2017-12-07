import React, { Component } from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import SimpleDropDown from './SimpleDropDown.js';
import MultipleSelector from './MultipleSelector.js';
import GlobalMethods from '../data/GlobalMethods.js'
import Data from '../data/Data'
import '../App.css';

class LeftView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      regionLevelValue: '',
      regionValue: '',
      scenarioCollectionValue: '',
      scenarioValue: '',
      timePeriodValue: '',
      regionsId: 0,
      scenarioCollectionId: 0,
      regionLevelData : [],
      regionsData : [],
      scenarioCollectionData: [],
      scenariosData: [],
      timePeriodData: [],
      indicatorCategoriesData:[]  
    }
    this.updateRegionLevelValue = this.updateRegionLevelValue.bind(this);
    this.updateRegionValue = this.updateRegionValue.bind(this);
    this.updateScenarioCollectionValue = this.updateScenarioCollectionValue.bind(this);
    this.updateScenarioValue = this.updateScenarioValue.bind(this);
    this.updateTimePeriodValue = this.updateTimePeriodValue.bind(this);
    
    Data.getRegionLevels().then(result => {
      this.setState({
        regionLevelData: GlobalMethods.createOptions(GlobalMethods.getRegionLevels(result))
      })
      console.log(this.state.regionLevelData);
    })
  }

  updateRegionLevelValue(newValue) {
    this.setState({
      regionLevelValue: newValue,
      regionsId: newValue
    });
    console.log("newValue: " + newValue + " regionLevelValue: " + this.state.regionLevelValue + " regionsId: " +  this.state.regionsId)        
    
    Data.getRegionswithId(newValue).then(result => {
      this.setState({
        regionsData: GlobalMethods.createOptions(GlobalMethods.getRegions(result))
      })
      console.log(this.state.regionsData);
    })
  }

  updateRegionValue(newValue) {
    console.log(newValue+"")    
    this.setState({
      regionValue: newValue,
    });
    Data.getRegionswithId(this.state.regionLevelValue).then(result => {
      this.setState({
        scenarioCollectionData: GlobalMethods.createOptions(GlobalMethods.getScenarioCollection(result, newValue))
      })
      console.log(this.state.scenarioCollectionData);
    })
  }

  updateScenarioCollectionValue(newValue) {
    console.log(newValue+"")    
    this.setState({
      scenarioCollectionValue: newValue,
    });
    Data.getScenarioCollection(newValue, this.state.regionValue).then(result => {
      this.setState({
        scenariosData: GlobalMethods.createDescriptionAsNameOptions(GlobalMethods.getScenarios(result)),
        timePeriodData: GlobalMethods.createTimeOptions(GlobalMethods.getTimePeriods(result)),
        indicatorCategoriesData: GlobalMethods.getIndicatorCategories(result)
      })
      console.log(this.state.scenariosData);
    })
  }

  updateScenarioValue(newValue) {
    console.log("New Value:  " +newValue)        
    this.setState({
      scenarioValue: newValue,
    });
    console.log("Value: " + this.state.scenarioValue)     
  }

  updateTimePeriodValue(newValue) {
    console.log("New Value:  " +newValue)    
    this.setState({
      timePeriodValue: newValue,
    });
    console.log("Value: " + this.state.timePeriodValue)     
  }

  render() {

    return (
      <div class="col-md-3 greenBox">
        <h4>Skenaarioiden valinta</h4>
        <SimpleDropDown 
          options={this.state.regionLevelData} 
          title="Aluetaso" 
          updateValue={this.updateRegionLevelValue} 
          selectValue={this.state.regionLevelValue}/>
        <br></br>
        <SimpleDropDown 
          options={this.state.regionsData} 
          title="Alue"  
          updateValue={this.updateRegionValue} 
          selectValue={this.state.regionValue}/>
        <br></br>
        <SimpleDropDown 
          options={this.state.scenarioCollectionData} 
          title="Skenaariokokoelma"  
          updateValue={this.updateScenarioCollectionValue} 
          selectValue={this.state.scenarioCollectionValue}/>
        <br></br>
        <MultipleSelector 
          choices = {this.state.scenariosData} 
          title="Skenaariot" 
          updateValue={this.updateScenarioValue} 
          selectValue={this.state.scenarioValue}/>
        <br></br>
        <MultipleSelector 
          choices = {this.state.timePeriodData} 
          title="Ajankohta"  
          updateValue={this.updateTimePeriodValue} 
          selectValue={this.state.timePeriodValue}/>
      </div>
    )
  }
}

export default LeftView