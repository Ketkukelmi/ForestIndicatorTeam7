import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/header.js';
import LeftView from './components/leftview.js';
import Middleview from './components/middleview.js';
import Rightview from './components/rightview.js';
import GlobalMethods from './data/GlobalMethods.js'
import Data from './data/Data'
import {changeLang, getScenarioCollection} from './data/Data'
import localizedStrings from './data/Localization.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      //Leftview states
      //Values (Id)
      regionLevelValue: '',
      regionValue: '',
      scenarioCollectionValue: '',
      scenarioValue: '',
      timePeriodValue: '',
      //Datas
      regionLevelData: [],
      regionsData: [],
      scenarioCollectionData: [],
      scenariosData: [],
      timePeriodData: [],
      indicatorCategoriesData: [],
      //Middle view states
      seriesToSend: [],
      indicatorNames: [],
      selectedIndicatorValues: [],
      regionLevelName: '',
      scenarioCollectionName: '',
      regionName: '',
      timePeriodName: '',
      //Right view states
      //Values (Id)
      woodProductionValue: [],
      biodiversityValue: [],
      naturalProductsValue: [],
      carbonValue: [],
      othersValue: [],
      //Datas
      woodProductionData: [],
      biodiversityData: [],
      naturalProductsData: [],
      carbonData: [],
      othersData: [],
      
      language : false,
      indicatorsFetched: false
    }

    this.updateRegionLevelValue = this.updateRegionLevelValue.bind(this);
    this.updateRegionValue = this.updateRegionValue.bind(this);
    this.updateScenarioCollectionValue = this.updateScenarioCollectionValue.bind(this);
    this.updateScenarioValue = this.updateScenarioValue.bind(this);
    this.updateTimePeriodValue = this.updateTimePeriodValue.bind(this);
    this.updateIndicators = this.updateIndicators.bind(this);

    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.renewData = this.renewData.bind(this);
    this.getRegionLevels();

  }
  getRegionLevels(){
    Data.getRegionLevels().then(result => {
      this.setState({
        regionLevelData: GlobalMethods.createOptions(GlobalMethods.getRegionLevels(result))
      })
    })
  }
  //Left select update methods
  updateRegionLevelValue(newValue) {
    this.state.regionLevelData.forEach(region => {
      if(region.value === newValue){
        this.setState({
          regionLevelName: region.label
        })
      }
    })
    this.setState({
      regionLevelValue: newValue,
    });

    Data.getRegionswithId(newValue).then(result => {
      this.setState({
        regionsData: GlobalMethods.createOptions(GlobalMethods.getRegions(result))
      })
    })
  }

  updateRegionValue(newValue) {
    this.state.regionsData.forEach(region => {
      if(region.value === newValue){
        this.setState({
          regionName: region.label
        })
      }
    })
    this.setState({
      regionValue: newValue,
    });
    Data.getRegionswithId(this.state.regionLevelValue).then(result => {
      this.setState({
        scenarioCollectionData: GlobalMethods.createOptions(GlobalMethods.getScenarioCollection(result, newValue))
      })
    })
  }

  updateScenarioCollectionValue(newValue) {
    this.state.scenarioCollectionData.forEach(scenarioCollection => {
      if(scenarioCollection.value === newValue){
        this.setState({
          scenarioCollectionName: scenarioCollection.label
        })
      }
    })
    this.setState({
      scenarioCollectionValue: newValue,
    });
    Data.getScenarioCollection(newValue, this.state.regionValue).then(result => {
      this.setState({
        scenariosData: GlobalMethods.createOptions(GlobalMethods.getScenarios(result)),
        timePeriodData: GlobalMethods.createTimeOptions(GlobalMethods.getTimePeriods(result)),
        indicatorCategoriesData: GlobalMethods.getIndicatorCategories(result),
        valuesData: GlobalMethods.getAllValues(result)
      })
    })
    this.setIndicators();
  }

  updateScenarioValue(newValue) {
    this.setState({
      scenarioValue: newValue,
    });
    if(this.state.indicatorsFetched) {
      this.getValueByIndicators(this.state.selectedIndicatorValues, newValue)
    }
  }

  updateTimePeriodValue(newValue) {
    this.state.timePeriodData.forEach(time => {
      if(time.value === newValue){
        this.setState({
          timePeriodName: time.label
        })
      }
    })
    this.setState({
      timePeriodValue: newValue,
    });
  }

  updateIndicators(newValue) {
    this.setState({
      selectedIndicatorValues: newValue,
    });
    this.getValueByIndicators(newValue, this.state.scenarioValue)
  }

  getIndicator(id) {
    return GlobalMethods.createOptions(GlobalMethods.getIndicators(id, this.state.indicatorCategoriesData))
  }
  setIndicators() {
    this.setState({
      woodProductionData: this.getIndicator(1),
      biodiversityData: this.getIndicator(2),
      naturalProductsData: this.getIndicator(3),
      carbonData: this.getIndicator(4),
      othersData: this.getIndicator(5),
    })
  }

  toggleLanguage() {
    debugger;
    if (localizedStrings.getLanguage() === "fi") {
      localizedStrings.setLanguage("en");
      
      
    } else {
      localizedStrings.setLanguage("fi");
      this.setState({language : false})
    }
    this.renewData();
}
renewData(){
  changeLang(localizedStrings.getLanguage());
  this.getRegionLevels();
}

  getValueByIndicators(values, scenarioValues) {
    
    if(values.length !== 0) {
      let scenariosArray = scenarioValues.split(",")
      let indicatorArray = values.split(",")
      let timePeriod = this.state.timePeriodValue
      let chosenValueSeries = []
      let series = []
      let indicatorNamesArray = []
      scenariosArray.forEach(scenario => {

        let chosenValues = []
        indicatorArray.forEach(indicator => {
          //Save name to array -> give this to graph 
          this.state.indicatorCategoriesData.forEach(indicatorData => {
            indicatorData.indicators.forEach(indicatorForName=>{
              if (indicatorForName.id == indicator) {
                indicatorNamesArray.push(indicatorForName.name)
              }
            })
          })

          this.state.valuesData.forEach(value => {
            if (value.scenarioId == scenario) {
              if (value.indicatorId == indicator) {
                if (value.timePeriodId == timePeriod) {
                  chosenValues.push(value.value)
                }
              }
            }
          })
        })
        chosenValueSeries.push(chosenValues)
      })

      let i = 0
      scenariosArray.forEach(scenario => {
        let seriesObj = {
          name: '',
          data: 0,
          id: 0
        }
        this.state.scenariosData.forEach(scenarioData => {
          if (scenarioData.value == scenario) {
            seriesObj.name = scenarioData.label
          }
        })
        seriesObj.data = chosenValueSeries[i]
        series.push({ seriesObj })
        i++;
      })

      this.setState({
        seriesToSend: series,
        indicatorNames: indicatorNamesArray,
        indicatorsFetched: true
      })
    }
  }

  render() {
    let leftViewProps = {
      //Values
      regionLevelValue: this.state.regionLevelValue,
      regionValue: this.state.regionValue,
      scenarioCollectionValue: this.state.scenarioCollectionValue,
      scenarioValue: this.state.scenarioValue,
      timePeriodValue: this.state.timePeriodValue,
      //Datas
      regionLevelData: this.state.regionLevelData,
      regionsData: this.state.regionsData,
      scenarioCollectionData: this.state.scenarioCollectionData,
      scenariosData: this.state.scenariosData,
      timePeriodData: this.state.timePeriodData,
      indicatorCategoriesData: this.state.indicatorCategoriesData,
      //Update methods
      updateRegionLevelValue: this.updateRegionLevelValue,
      updateRegionValue: this.updateRegionValue,
      updateScenarioCollectionValue: this.updateScenarioCollectionValue,
      updateScenarioValue: this.updateScenarioValue,
      updateTimePeriodValue: this.updateTimePeriodValue,
    }

    let rightViewProps = {
      //Values
      woodProductionValue: this.state.selectedIndicatorValues,
      biodiversityValue: this.state.selectedIndicatorValues,
      naturalProductsValue: this.state.selectedIndicatorValues,
      carbonValue: this.state.selectedIndicatorValues,
      othersValue: this.state.selectedIndicatorValues,
      //Datas
      woodProductionData: this.getIndicator(1),
      biodiversityData: this.getIndicator(2),
      naturalProductsData: this.getIndicator(3),
      carbonData: this.getIndicator(4),
      othersData: this.getIndicator(5),
      //Updaters
      updateWoodProductionValue: this.updateIndicators,
      updateBiodiversityValue: this.updateIndicators,
      updateNaturalProductsValue: this.updateIndicators,
      updateCarbonValue: this.updateIndicators,
      updateOthersValue: this.updateIndicators
    }
    return (
      <div className="container">

        <Header />

        <div className="row">

          <LeftView {...leftViewProps} />

          <Middleview values={this.state.seriesToSend} 
                      indicatorNames={this.state.indicatorNames}
                      regionLevelName = {this.state.regionLevelName} 
                      regionName = {this.state.regionName}
                      scenarioCollectionName = {this.state.scenarioCollectionName}
                      timePeriodName = {this.state.timePeriodName}/>

          <Rightview  {...rightViewProps} />

        </div>
        <button type="button" className="btn btn-primary" onClick={this.toggleLanguage}>{ localizedStrings.languageOnSwitch }Fi/En</button>
      </div>
    );
  }
}

export default App;
