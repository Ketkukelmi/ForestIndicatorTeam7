import React, { Component } from 'react';
import '../App.css';
import localizedStrings from '../data/Localization.js'

class header extends Component {

constructor(props){
    super(props);

    this.toggleLanguage = this.toggleLanguage.bind(this);
}

    toggleLanguage() {
        if (localizedStrings.getLanguage() == "fi") {
          localizedStrings.setLanguage("en");
        } else {
          localizedStrings.setLanguage("fi");
        }
    }

    render () {
        return (
<div className="row">

<div className="col-md-12 text-center">
<h1 className="coolheader">Forest indicator</h1>

</div>

</div>
        )
    }
}

export default header