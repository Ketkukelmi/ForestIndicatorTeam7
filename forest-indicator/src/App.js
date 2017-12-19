import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/header.js';
import LeftView from './components/leftview.js';
import Middleview from './components/middleview.js';
import chart from './components/middleview.js';
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
      indicatorCategoriesData: []
    }

    this.updateRegionLevelValue = this.updateRegionLevelValue.bind(this);
    this.updateRegionValue = this.updateRegionValue.bind(this);
    this.updateScenarioCollectionValue = this.updateScenarioCollectionValue.bind(this);
    this.updateScenarioValue = this.updateScenarioValue.bind(this);
    this.updateTimePeriodValue = this.updateTimePeriodValue.bind(this);
    this.updateBiodiversityValue = this.updateBiodiversityValue.bind(this);
    this.updateCarbonValue = this.updateCarbonValue.bind(this);
    this.updateNaturalProductsValue = this.updateNaturalProductsValue.bind(this);
    this.updateOthersValue = this.updateOthersValue.bind(this);
    this.updateWoodProductionValue = this.updateWoodProductionValue.bind(this);
    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.renewData = this.renewData.bind(this);
    
    Data.getRegionLevels().then(result => {
      this.setState({
        regionLevelData: GlobalMethods.createOptions(GlobalMethods.getRegionLevels(result))
      })
      console.log(this.state.regionLevelData);
    })
  }

  //Left select update methods
  updateRegionLevelValue(newValue) {
    this.setState({
      regionLevelValue: newValue,
    });
    console.log("newValue: " + newValue + " regionLevelValue: " + this.state.regionLevelValue + " regionsId: " + this.state.regionsId)

    Data.getRegionswithId(newValue).then(result => {
      this.setState({
        regionsData: GlobalMethods.createOptions(GlobalMethods.getRegions(result))
      })
      console.log(this.state.regionsData);
    })
  }

  updateRegionValue(newValue) {
    console.log(newValue + "")
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
    console.log(newValue + "")
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

      console.log(this.state.valuesData);
    })
    this.setIndicators();
  }

  updateScenarioValue(newValue) {
    this.setState({
      scenarioValue: newValue,
    });

  }

  updateTimePeriodValue(newValue) {
    console.log("New Value:  " + newValue)
    this.setState({
      timePeriodValue: newValue,
    });
    console.log("Value: " + this.state.timePeriodValue)
  }

  //Right select update methods
  updateWoodProductionValue(newValue) {
    this.setState({
      woodProductionValue: newValue,
    });
    console.log("newValue: " + newValue + " woodProductionValue: " + this.state.woodProductionValue)
    this.getValueByIndicators(newValue, 1)
  }

  updateBiodiversityValue(newValue) {
    this.setState({
      biodiversityValue: newValue,
    });
    console.log("newValue: " + newValue + " biodiversityValue: " + this.state.biodiversityValue)
    this.getValueByIndicators(newValue, 2)
    
  }

  updateNaturalProductsValue(newValue) {
    this.setState({
      naturalProductsValue: newValue,
    });
    console.log("newValue: " + newValue + " naturalProductsValue: " + this.state.naturalProductsValue)
    this.getValueByIndicators(newValue, 3)
    
  }

  updateCarbonValue(newValue) {
    this.setState({
      carbonValue: newValue,
    });
    console.log("newValue: " + newValue + " carbonValue: " + this.state.carbonValue)
    this.getValueByIndicators(newValue, 4)
    
  }

  updateOthersValue(newValue) {
    this.setState({
      othersValue: newValue,
    });
    console.log("newValue: " + newValue + " othersValue: " + this.state.othersValue)
    this.getValueByIndicators(newValue, 5)
    
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

  getValueByIndicators(values, id) {
    let scenariosArray = this.state.scenarioValue.split(",")
    let indicatorArray = values.split(",")
    let timePeriod = this.state.timePeriodValue
    //let lastValue = values.split(",")
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
      seriesObj.id = id
      series.push({ seriesObj })
      i++;
    })

    console.log(series)
    this.setState({
      seriesToSend: series,
      indicatorNames: indicatorNamesArray
    })
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
      woodProductionValue: this.state.woodProductionValue,
      biodiversityValue: this.state.biodiversityValue,
      naturalProductsValue: this.state.naturalProductsValue,
      carbonValue: this.state.carbonValue,
      othersValue: this.state.othersValue,
      //Datas
      woodProductionData: this.getIndicator(1),
      biodiversityData: this.getIndicator(2),
      naturalProductsData: this.getIndicator(3),
      carbonData: this.getIndicator(4),
      othersData: this.getIndicator(5),
      //Updaters
      updateWoodProductionValue: this.updateWoodProductionValue,
      updateBiodiversityValue: this.updateBiodiversityValue,
      updateNaturalProductsValue: this.updateNaturalProductsValue,
      updateCarbonValue: this.updateCarbonValue,
      updateOthersValue: this.updateOthersValue
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