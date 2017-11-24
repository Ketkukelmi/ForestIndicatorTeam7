
import React, { Component } from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const Choices = [
    { label: 'Kantohinta-arvo', value: 'StubPriceValue'},
    { label: 'Nettotulojen nykyarvo', value: 'NetProfitValue'},
    { label: 'Hakkuukertymä', value: 'BeatingUp'},
    { label: 'Tilavuus', value: 'Volume'}
];


class rightwing extends Component {

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
        const { stayOpen, value } = this.state;
        const options = Choices;
        return (
            <div class="col-md-3">
            <p>Puutuotanto</p>
            <Select
					closeOnSelect={!stayOpen}
					multi
                    onChange={this.handleSelectChange}
                    options={options}
					placeholder="Valitse yksi tai useampi vaihtoehto"
                    removeSelected={this.state.removeSelected}
					rtl={this.state.rtl}
					simpleValue
					value={value}
				/>

            </div>
        )
    }
}

export default rightwing