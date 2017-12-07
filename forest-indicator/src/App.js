import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/header.js';
import LeftView from './components/leftview.js';
import Middleview from './components/middleview.js';
import Rightview from './components/rightview.js';
import GlobalMethods from './data/GlobalMethods.js'
import Data from './data/Data'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      //Leftview states
      regionLevelValue: '',
      regionValue: '',
      scenarioCollectionValue: '',
      scenarioValue: '',
      timePeriodValue: '',
      regionsId: 0,
      scenarioCollectionId: 0,
      regionLevelData: [],
      regionsData: [],
      scenarioCollectionData: [],
      scenariosData: [],
      timePeriodData: [],
      indicatorCategoriesData: [],
      //Right view states
      woodProductionValue: [],
      biodiversityValue: [],
      naturalProductsValue: [],
      carbonValue: [],
      othersValue: [],
      woodProductionData: [],
      biodiversityData: [],
      naturalProductsData: [],
      carbonData: [],
      othersData: [],
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
      regionsId: newValue
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
        scenariosData: GlobalMethods.createDescriptionAsNameOptions(GlobalMethods.getScenarios(result)),
        timePeriodData: GlobalMethods.createTimeOptions(GlobalMethods.getTimePeriods(result)),
        indicatorCategoriesData: GlobalMethods.getIndicatorCategories(result)
      })
      console.log(this.state.indicatorCategoriesData);
    })
    this.setIndicators();
  }

  updateScenarioValue(newValue) {
    console.log("New Value:  " + newValue)
    this.setState({
      scenarioValue: newValue,
    });
    console.log("Value: " + this.state.scenarioValue)
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
  }

  updateBiodiversityValue(newValue) {
    this.setState({
      biodiversityValue: newValue,
    });
    console.log("newValue: " + newValue + " biodiversityValue: " + this.state.biodiversityValue)
  }

  updateNaturalProductsValue(newValue) {
    this.setState({
      naturalProductsValue: newValue,
    });
    console.log("newValue: " + newValue + " naturalProductsValue: " + this.state.naturalProductsValue)
  }

  updateCarbonValue(newValue) {
    this.setState({
      carbonValue: newValue,
    });
    console.log("newValue: " + newValue + " carbonValue: " + this.state.carbonValue)
  }

  updateOthersValue(newValue) {
    this.setState({
      othersValue: newValue,
    });
    console.log("newValue: " + newValue + " othersValue: " + this.state.othersValue)
  }

  getIndicator(id){
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

  render() {
    let leftViewProps = {
      //Values
      regionLevelValue: this.state.regionLevelValue,
      regionValue: this.state.regionValue,
      scenarioCollectionValue: this.state.scenarioCollectionValue,
      scenarioValue: this.state.scenarioValue,
      timePeriodValue: this.state.timePeriodValue,
      //Ids
      regionsId: this.state.regionsId,
      scenarioCollectionId: this.state.scenarioCollectionId,
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

          <Middleview />

          <Rightview  {...rightViewProps} />

        </div>

      </div>
    );
  }
}

export default App;
