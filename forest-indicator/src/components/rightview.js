import React, { Component } from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import MultipleSelector from './MultipleSelector';
import FeedbackPopup from './FeedbackPopup.js';



class rightwing extends Component {
constructor(props){
    super(props);
    this.state = {
        showComponent : false,
    };
    this.onbuttonclicked = this.onbuttonclicked.bind(this);
}
    onbuttonclicked(){
        
        this.setState({
            showComponent: !this.state.showComponent
        
        });
    }

    render () {

        let choices = [
            { label: 'Kantohinta-arvo', value: 'StubPriceValue'},
            { label: 'Nettotulojen nykyarvo', value: 'NetProfitValue'},
            { label: 'Hakkuukertymä', value: 'BeatingUp'},
            { label: 'Tilavuus', value: 'Volume'},
        ];

        let gatherings = [
            {label: 'Mustikkasato', value: "BlueberryHarvest"},
            {label: 'Puolukkasato', value: "LingonHarvest"},
        ];

        let diversity = [
            {label: 'Lahopuun määrä', value: "MoldTree"},
            {label: 'Putkilokasvien lkm', value: 'Pipe'},
            {label: 'Mustikan peittävyys', value: 'BlueberryHidings'},
            {label: 'Jäkälien peittävyys', value: 'JakalaHidings'},
            {label: 'Käävät', value: 'oldPeople'},
        ];

        let coal =[{label: "Hiilen määrä", value: 'coalAmount'}];
        let rest =[{label: "Biomassa", value: 'BioMass'}];

        const title = "Puutuotanto";
        const title1 = "Keruutuotteet";
        const title2 = "Monimuotoisuus";
        const title3 = "Hiilen määrä";
        const title4 = "Biomassa";
        
        return (
            <div class="col-md-3">
            <MultipleSelector choices = {choices} title = {title} />
            <br></br>
            <MultipleSelector choices = {gatherings} title = {title1} />
            <br></br>
            <MultipleSelector choices = {diversity} title = {title2} />
            <br></br>
            <MultipleSelector choices = {coal} title = {title3} />
            <br></br>
            <MultipleSelector choices = {rest} title = {title4} />
            <br></br>
            <button type="button" className="btn btn-success"
            onClick={this.onbuttonclicked}>Palaute</button>   
            <br></br>
            {this.state.showComponent && <FeedbackPopup />}
            </div>
        )
    }
}

export default rightwing