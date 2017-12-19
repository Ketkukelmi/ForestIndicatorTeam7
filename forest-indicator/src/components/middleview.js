import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';
import Highcharts from 'highcharts';
import ReactHighcharts  from 'react-highcharts';
import HighchartsMore from 'highcharts/js/highcharts-more.js';
import Heatmap from 'highcharts/modules/heatmap.js';
import Export from 'highcharts/modules/exporting.js';
import _ from 'lodash';
import '../App.css';
import localizedStrings from '../data/Localization.js';
HighchartsMore(ReactHighcharts.Highcharts)        
Heatmap(ReactHighcharts.Highcharts)
Export(ReactHighcharts.Highcharts)
class middleview extends Component {

    render () {
        
        const series = []
        const config = {
            
            chart:{
                type: "column"
              },
              title: {
                text: this.props.regionLevelName + ", " + this.props.regionName + ", " + this.props.scenarioCollectionName + ", " + this.props.timePeriodName
            },
              xAxis: {
                categories: this.props.indicatorNames
              },
              yAxis: {
                max: 1
              },
              series: []
            };
            config.series = series;

            this.props.values.forEach(value => {
            let name = ""            
            let values = []
            name = value.seriesObj.name,
            values = value.seriesObj.data
            series.push({name: name, data: values})
        });

        return (
    
    <div className="col-md-6">
    <div className="lightgreenBox">
        <h2 className="text-center">{localizedStrings.forestyCenter}</h2>

<div className="row">

<div id="chart" className="col-md-12">
<ReactHighcharts config = {config}  ref={(chart) => { this._chart = chart; }}></ReactHighcharts>
    </div>
    </div>    
    </div>
</div>
        )
    }
}
export default middleview