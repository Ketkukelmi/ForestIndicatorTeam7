import React, { Component } from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import SimpleDropDown from './SimpleDropDown.js';
import MultipleSelector from './MultipleSelector.js';
import GlobalMethods from '../data/GlobalMethods.js'

class LeftView extends Component {

  render() {
    /* Dummy Data */
    let data = '[{"name": "Maakunnat", "description": "Maakunnat v2017 vallitsevan maakuntajaon mukaisesti","id": 1,"order": 1},{"name": "Metsäkeskukset","description": "Metsäkeskukset v2015 vallitsevan metsäkeskusjaon mukaisesti","id": 2,"order": 2}]'

    let regionsData ='[{ "name": "Pohjois-Pohjanmaa" },{ "name": "Etelä-Pohjanmaa" }]'

    let regions = [
      { value: 'ppohjanmaa', label: 'Pohjois-Pohjanmaa' },
      { value: 'epohjanmaa', label: 'Etelä-Pohjanmaa' },
      { value: 'three', label: 'Alue 3' },
      { value: 'four', label: 'Alue 4' },
    ]
    let scenarioLibrary = [
      { value: 'firstInvention', label: 'Valtakunnan metsien 1.1 inventointi' },
      { value: 'epohjanmaa', label: 'Etelä-Pohjanmaa' },
      { value: 'three', label: 'Alue 3' },
      { value: 'four', label: 'Alue 4' },
    ]
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
        <SimpleDropDown options={GlobalMethods.parseNameAndValue(data)} title="Aluetaso"/>
        <br></br>
        <SimpleDropDown options={GlobalMethods.parseNameAndValue(regionsData)} title="Alue"/>
        <br></br>
        <SimpleDropDown options={scenarioLibrary} title="Skenaariokokoelma"/>
        <br></br>
        <MultipleSelector choices = {scenarios} title="Skenaariot" />
        <br></br>
        <MultipleSelector choices = {times} title="Ajankohta" />
      </div>
    )
  }
}

export default LeftView