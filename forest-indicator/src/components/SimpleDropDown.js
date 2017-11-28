import React, { Component } from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class SimpleDropDown extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedOption: '',
      label: 'Alueet:',
      searchable: true,
      clearable: true,
    }

    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(newValue) {
    this.setState({
      selectValue: newValue,
    });
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
          placeholder="Valitse..."
          value={this.state.selectValue}
          onChange={this.updateValue}
          openOnClick={false}
          searchable={this.state.searchable}
        />
      </div>
    )
  }
}

export default SimpleDropDown