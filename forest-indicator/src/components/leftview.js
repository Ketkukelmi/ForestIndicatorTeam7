import React, { Component } from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import SimpleDropDown from './SimpleDropDown.js';

class LeftView extends Component {

  render() {
    let regionLevels = [
      { value: 'maakunta', label: 'Maakunnat' },
      { value: 'epohjanmaa', label: 'Etelä-Pohjanmaa' },
      { value: 'three', label: 'Alue 3' },
      { value: 'four', label: 'Alue 4' },
    ]
    let regions = [
      { value: 'ppohjanmaa', label: 'Pohjois-Pohjanmaa' },
      { value: 'epohjanmaa', label: 'Etelä-Pohjanmaa' },
      { value: 'three', label: 'Alue 3' },
      { value: 'four', label: 'Alue 4' },
    ]
    return (
      <div class="col-md-3">
        <h4>Skenaarioiden valinta</h4>
        <SimpleDropDown options={regionLevels} title="Aluetaso"/>
        <SimpleDropDown options={regions} title="Alue"/>
      </div>
    )
  }
}

export default LeftView