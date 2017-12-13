import React, { Component } from 'react'
import {
    PopupboxManager,
    PopupboxContainer
  } from 'react-popupbox';
  import localizedStrings from '../data/Localization.js'

class FeedbackPopup extends Component {

    constructor(props){
        
        super(props);

        this.state ={
            inputEmail: "",
            inputSubject: "",
            inputMsg: ""
        }
        this.inputChange = this.inputChange.bind(this);
    };

    inputChange(event){
        console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value});
    }

    openPopupbox(){
        const content = (
            <div>
            </div>
        )
        PopupboxManager.open({ content })
    }
    sendEmail(){
        this.state.inputEmail,
        this.state.inputSubject,
        this.state.inputMsg
    }

    render () {
        const popupboxConfig = {
            titleBar: {
              enable: true,
              text: 'Feedback'
            },
            fadeIn: true,
            fadeInSpeed: 500
          }

        return (
            <div>            
                <p1>{localizedStrings.email}</p1>
                    <br></br>
                    <input type="text" 
                    name="inputEmail"
                    debug
                    value={ this.state.inputEmail }
                    onChange={ this.inputChange }/>
                    <br></br>
                <p1>{localizedStrings.subject}</p1>
                    <br></br>
                    <input type="text" 
                    name="inputSubject"
                    value={ this.state.inputSubject }
                    onChange={ this.inputChange }/>
                    <br></br>
                <p1>{localizedStrings.feedback}</p1>
                    <br></br>
                    <textarea name="Text1" cols="35" rows="3"
                    name="inputMsg"
                    value={ this.state.inputMsg }
                    onChange={ this.inputChange }></textarea>
                <button type = "button" className = "btn btn-success"
                onClick={this.sendEmail}>{localizedStrings.send}</button>
            </div>
        )
    }
}

export default FeedbackPopup