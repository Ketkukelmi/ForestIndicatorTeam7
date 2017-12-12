import React, { Component } from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import MultipleSelector from './MultipleSelector';
import GlobalMethods from '../data/GlobalMethods.js'
import FeedbackPopup from './FeedbackPopup.js';
import Data from '../data/Data.js'
import localizedStrings from '../data/Localization.js'
import '../App.css';

class rightwing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            indicatorCategoriesData: [],
            woodProductionValue: [],
            biodiversityValue: [],
            naturalProductsValue: [],
            carbonValue: [],
            othersValue: [],
            language : false
        };
        this.onbuttonclicked = this.onbuttonclicked.bind(this);

        Data.getScenarioCollection(6, 24).then(result => {
            this.setState({
                indicatorCategoriesData: GlobalMethods.getIndicatorCategories(result)
            })
            console.log(this.state.indicatorCategoriesData);
        })

        this.updateBiodiversityValue = this.updateBiodiversityValue.bind(this);
        this.updateCarbonValue = this.updateCarbonValue.bind(this);
        this.updateNaturalProductsValue = this.updateNaturalProductsValue.bind(this);
        this.updateOthersValue = this.updateOthersValue.bind(this);
        this.updateWoodProductionValue = this.updateWoodProductionValue.bind(this);
        
    }

    updateWoodProductionValue(newValue){
        this.setState({
            woodProductionValue: newValue,
        });
        console.log("newValue: " + newValue + " woodProductionValue: " + this.state.woodProductionValue)
    }


    updateBiodiversityValue(newValue){
        this.setState({
            biodiversityValue: newValue,
        });
        console.log("newValue: " + newValue + " biodiversityValue: " + this.state.biodiversityValue)
    }

    updateNaturalProductsValue(newValue){
        this.setState({
            naturalProductsValue: newValue,
        });
        console.log("newValue: " + newValue + " naturalProductsValue: " + this.state.naturalProductsValue)
    }

    updateCarbonValue(newValue){
        this.setState({
            carbonValue: newValue,
        });
        console.log("newValue: " + newValue + " carbonValue: " + this.state.carbonValue)
    }

    updateOthersValue(newValue){
        this.setState({
            othersValue: newValue,
        });
        console.log("newValue: " + newValue + " othersValue: " + this.state.othersValue)
    }
    
    onbuttonclicked() {

        this.setState({
            showComponent: !this.state.showComponent


        });
    }

    render() {

        
        return (
            <div>
            <div class="col-md-3 greenBox">
                <MultipleSelector 
                    choices={GlobalMethods.createOptions(GlobalMethods.getIndicators(1, this.state.indicatorCategoriesData))} 
                    title={localizedStrings.woodProduction}
                    updateValue={this.updateWoodProductionValue} 
                    selectValue={this.state.woodProductionValue}/>
                <br></br>
                <MultipleSelector 
                    choices={GlobalMethods.createOptions(GlobalMethods.getIndicators(2, this.state.indicatorCategoriesData))} 
                    title={localizedStrings.naturalProducts} 
                    updateValue={this.updateBiodiversityValue} 
                    selectValue={this.state.biodiversityValue}/>
                <br></br>
                <MultipleSelector 
                    choices={GlobalMethods.createOptions(GlobalMethods.getIndicators(3, this.state.indicatorCategoriesData))} 
                    title={localizedStrings.diversity}                    
                    updateValue={this.updateNaturalProductsValue} 
                    selectValue={this.state.naturalProductsValue}/>
                <br></br>
                <MultipleSelector 
                    choices={GlobalMethods.createOptions(GlobalMethods.getIndicators(4, this.state.indicatorCategoriesData))} 
                    title={localizedStrings.coal}          
                    updateValue={this.updateCarbonValue} 
                    selectValue={this.state.carbonValue}/>
                <br></br>
                <MultipleSelector 
                    choices={GlobalMethods.createOptions(GlobalMethods.getIndicators(5, this.state.indicatorCategoriesData))} 
                    title={localizedStrings.rest}          
                    updateValue={this.updateOthersValue} 
                    selectValue={this.state.othersValue} />

                <br></br>
                <button type="button" className="btn btn-primary"
                    onClick={this.onbuttonclicked}>Palaute</button>

                {this.state.showComponent && <FeedbackPopup />}

                
            </div>
            
        
            </div>
        )
    }
}

export default rightwing