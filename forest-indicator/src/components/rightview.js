import React, { Component } from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import MultipleSelector from './MultipleSelector';
import GlobalMethods from '../data/GlobalMethods.js'


class rightwing extends Component {

    

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
            <MultipleSelector choices = {GlobalMethods.createOptions(GlobalMethods.getIndicators(1))} title = {title} />
            <br></br>
            <MultipleSelector choices = {GlobalMethods.createOptions(GlobalMethods.getIndicators(2))} title = {title1} />
            <br></br>
            <MultipleSelector choices = {GlobalMethods.createOptions(GlobalMethods.getIndicators(3))} title = {title2} />
            <br></br>
            <MultipleSelector choices = {GlobalMethods.createOptions(GlobalMethods.getIndicators(4))} title = {title3} />
            <br></br>
            <MultipleSelector choices = {GlobalMethods.createOptions(GlobalMethods.getIndicators(5))} title = {title4} />
            </div>
        )
    }
}

export default rightwing