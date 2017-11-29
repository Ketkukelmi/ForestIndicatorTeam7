import React, { Component } from 'react'
import {
    PopupboxManager,
    PopupboxContainer
  } from 'react-popupbox';

class FeedbackPopup extends Component {
    debugger

openPopupbox(){
    const content = (
        <div>
        <h1> janne on pyllypää </h1>
        <p1> janne kiusaa :( </p1>
        </div>
    )
    PopupboxManager.open({ content })
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
                <p1>Sähköposti</p1>
                <br></br>
                <input type="text" />
                <br></br>
                <p1>Aihe</p1>
                <br></br>
                <input type="text" />
                <br></br>
                <p1>Palaute</p1>
                <br></br>
                <textarea name="Text1" cols="40" rows="3"></textarea>
                <button type = "button" className = "btn btn-success">Lähetä</button>
            </div>
        )
    }
}

export default FeedbackPopup