import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import testimg from './test.png';

class middle-view extends Component {
    render () {
        return (
    <div className="col-md-6">
        <h2 className="text-center">Alue</h2>

<div className="row">

<div className="col-md-6">
    <figure className="text-left" >
        <h4>Skenaario</h4>
        <img src={testimg} alt="logo" /> 
        <figcaption >Lähde</figcaption>
        <br/>
    </figure>
</div>
<div className="col-md-6">
<figure className="text-left" >
    <h4>Skenaario</h4>
    <img src={testimg} alt="logo" /> 
    <figcaption >Lähde</figcaption>
    <br/>
</figure>
</div>
<div className="col-md-6">
    <figure className="text-left" >
        <h4>Skenaario</h4>
        <img src={testimg} alt="logo" /> 
        <figcaption >Lähde</figcaption>
        <br/>
    </figure>
</div>
<div className="col-md-6">
    <figure className="text-left" >
        <h4>Skenaario</h4>
        <img src={testimg} alt="logo" /> 
        <figcaption >Lähde</figcaption>
        <br/>
    </figure>
</div>
</div>    
        <br/>
        <button type="button" className="btn btn-primary">Kaavio 1</button>   
        <button type="button" className="btn btn-primary">Kaavio 2</button>   
        <button type="button" className="btn btn-primary">Taulukko</button>   
        <button type="button" className="btn btn-primary pull-right">Lataa</button>   
        <button type="button" className="btn btn-primary pull-right">Printtaa</button>   
        </div>
        )
    }
}

export default middle-view