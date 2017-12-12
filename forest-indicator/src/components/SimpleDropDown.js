import React, { Component } from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import localizedStrings from '../data/Localization.js'

class SimpleDropDown extends Component {

  constructor(props) {
    super(props)
    this.state = {
      label: 'Alueet:',
      searchable: true,
      clearable: true,
    }
  }
  

  render () {


    return (
      <div>
        <p>{this.props.title}</p>
        <Select
          id="area-select"
          options={this.props.options}
          simpleValue
          clearable={this.state.clearable}
          name="selected-area"
          placeholder={localizedStrings.choose1}
          value={this.props.selectValue}
          onChange={this.props.updateValue}
          openOnClick={false}
          searchable={this.state.searchable}
        />
      </div>
    )
  }
}

export default SimpleDropDown