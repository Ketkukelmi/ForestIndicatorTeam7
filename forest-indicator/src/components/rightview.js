import React, { Component } from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import MultipleSelector from './MultipleSelector';
import GlobalMethods from '../data/GlobalMethods.js'
import FeedbackPopup from './FeedbackPopup.js';
import Data from '../data/Data.js'

class rightwing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this.onbuttonclicked = this.onbuttonclicked.bind(this);
    }

    
    onbuttonclicked() {

        this.setState({
            showComponent: !this.state.showComponent


        });
    }

    render() {

        const title = "Puuntuotanto";
        const title1 = "Monimuotoisuus";
        const title2 = "Keruutuotteet";
        const title3 = "Hiili";
        const title4 = "Muut";

        return (
            <div class="col-md-3">
                <MultipleSelector 
                    choices={this.props.woodProductionData} 
                    title={title}
                    updateValue={this.props.updateWoodProductionValue} 
                    selectValue={this.props.woodProductionValue}/>
                <br></br>
                <MultipleSelector 
                    choices={this.props.biodiversityData} 
                    title={title1} 
                    updateValue={this.props.updateBiodiversityValue} 
                    selectValue={this.props.biodiversityValue}/>
                <br></br>
                <MultipleSelector 
                    choices={this.props.naturalProductsData} 
                    title={title2}                    
                    updateValue={this.props.updateNaturalProductsValue} 
                    selectValue={this.props.naturalProductsValue}/>
                <br></br>
                <MultipleSelector 
                    choices={this.props.carbonData} 
                    title={title3}          
                    updateValue={this.props.updateCarbonValue} 
                    selectValue={this.props.carbonValue}/>
                <br></br>
                <MultipleSelector 
                    choices={this.props.othersData} 
                    title={title4}          
                    updateValue={this.props.updateOthersValue} 
                    selectValue={this.props.othersValue} />

                <br></br>
                <button type="button" className="btn btn-success"
                    onClick={this.onbuttonclicked}>Palaute</button>

                {this.state.showComponent && <FeedbackPopup />}
            </div>
        )
    }
}

export default rightwing