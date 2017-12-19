import React, { Component } from 'react'
import 'react-select/dist/react-select.css';
import MultipleSelector from './MultipleSelector';
import FeedbackPopup from './FeedbackPopup.js';
import localizedStrings from '../data/Localization.js'
import '../App.css';

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
        return (
            <div>
            <div className="col-md-3 greenBox">
                <MultipleSelector 
                    choices={this.props.woodProductionData} 
                    title={localizedStrings.woodProduction}
                    updateValue={this.props.updateWoodProductionValue} 
                    selectValue={this.props.woodProductionValue}/>
                <br></br>
                <MultipleSelector 
                    choices={this.props.biodiversityData} 
                    title={localizedStrings.naturalProducts} 
                    updateValue={this.props.updateBiodiversityValue} 
                    selectValue={this.props.biodiversityValue}/>
                <br></br>
                <MultipleSelector 
                    choices={this.props.naturalProductsData} 
                    title={localizedStrings.diversity}                    
                    updateValue={this.props.updateNaturalProductsValue} 
                    selectValue={this.props.naturalProductsValue}/>
                <br></br>
                <MultipleSelector 
                    choices={this.props.carbonData} 
                    title={localizedStrings.coal}          
                    updateValue={this.props.updateCarbonValue} 
                    selectValue={this.props.carbonValue}/>
                <br></br>
                <MultipleSelector 
                    choices={this.props.othersData} 
                    title={localizedStrings.rest}          
                    updateValue={this.props.updateOthersValue} 
                    selectValue={this.props.othersValue} />

                <br></br>
                <button type="button" className="btn btn-primary"
                    onClick={this.onbuttonclicked}>{localizedStrings.feedback}</button>

                {this.state.showComponent && <FeedbackPopup />}

                
            </div>
            
        
            </div>
        )
    }
}

export default rightwing