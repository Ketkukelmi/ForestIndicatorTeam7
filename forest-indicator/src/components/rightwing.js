import React, { Component } from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import MultipleSelector from './MultipleSelector';



class rightwing extends Component {

    

    render () {

        let choices = [
            { label: 'Kantohinta-arvo', value: 'StubPriceValue'},
            { label: 'Nettotulojen nykyarvo', value: 'NetProfitValue'},
            { label: 'Hakkuukertymä', value: 'BeatingUp'},
            { label: 'Tilavuus', value: 'Volume'},
        ];
        let Gatherings = [
            {label: 'Mustikkasato', value: "BlueberryHarvest"},
            {label: 'Puolukkasato', value: "LingonHarvest"},
        ];
        const title = "Puutuotanto";
        
        return (
            <div class="col-md-3">
            <MultipleSelector choices = {choices} title = {title} />
            </div>
        )
    }
}

export default rightwing