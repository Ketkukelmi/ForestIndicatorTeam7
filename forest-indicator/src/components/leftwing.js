import React, { Component } from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class leftwing extends Component {
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }
  render() {
    return (
      <div class="col-md-3">
        <Select
          name="form-field-name"
          value={this.state.value}
          onChange={this.handleChange}
          options={[
            { value: 'one', label: 'Pohjois-Pohjanmaa' },
            { value: 'two', label: 'Etelä-Pohjanmaa' },
          ]}
        />
      </div>
    )
  }
}

export default leftwing