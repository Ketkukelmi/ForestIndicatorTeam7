import React, { Component } from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class MultipleSelector extends Component {

    constructor(props) {
        super(props)
		this.state = {
			removeSelected: true,
			disabled: false,
			stayOpen: false,
			value: [],
			rtl: false
        };
        
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange (value) {
		console.log('You\'ve selected:', value);
		this.setState({ value });
    }
    
    state = {
        selectedOption: '',
      }
      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
      }

      render () {
        let { stayOpen, value } = this.state;
        
        return (
            <div >
            <p>{this.props.title}</p>
            <Select
					closeOnSelect={!stayOpen}
					multi
                    onChange={this.props.updateValue}
                    options={this.props.choices}
					placeholder="Valitse yksi tai useampi vaihtoehto"
                    removeSelected={this.state.removeSelected}
					rtl={this.state.rtl}
					simpleValue
					value={this.props.selectValue}
				/>
        
            </div>
        )
    }
}

export default MultipleSelector