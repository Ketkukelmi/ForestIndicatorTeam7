import React, { Component } from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import SimpleDropDown from './SimpleDropDown.js';
import MultipleSelector from './MultipleSelector.js';
import GlobalMethods from '../data/GlobalMethods.js'

class LeftView extends Component {

  render() {

    let times = [
      { value: '2021', label: '2021(-2025)'},
      { value: '2026', label: '2026(-2030)'},
      { value: '2031', label: '2031(-2035)'},
      { value: '2036', label: '2036(-2040)'},
      { value: '2041', label: '2041(-2045)'},
      { value: '2046', label: '2046(-2050)'},
    ]

    let scenarios = [
        {value: 'netWorth', label: "Suurin nettotulo"},
        {value: 'AirAndEnergyPolitic', label: "Ilmasto- ja energiapoliittinen"},
        {value: 'BlueberryHarvest', label: "Mustikkasato"},
        {value: 'LingonHarvest', label: "Puolukkasato"},
        {value: 'BadWood', label: "Lahopuu"},
        {value: 'Coal', label: "Hiilinielu"},
    ]

    return (
      <div class="col-md-3">
        <h4>Skenaarioiden valinta</h4>
        <SimpleDropDown options={GlobalMethods.createOptions(GlobalMethods.getRegionLevels())} title="Aluetaso" updateValue={this.updateValue}/>
        <br></br>
        <SimpleDropDown options={GlobalMethods.createOptions(GlobalMethods.getRegions())} title="Alue"/>
        <br></br>
        <SimpleDropDown options={GlobalMethods.createOptions(GlobalMethods.getScenarioCollection(24))} title="Skenaariokokoelma"/>
        <br></br>
        <MultipleSelector choices = {GlobalMethods.createDescriptionAsNameOptions(GlobalMethods.getScenarios())} title="Skenaariot" />
        <br></br>
        <MultipleSelector choices = {GlobalMethods.createTimeOptions(GlobalMethods.getTimePeriods())} title="Ajankohta" />
      </div>
    )
  }
}

export default LeftView