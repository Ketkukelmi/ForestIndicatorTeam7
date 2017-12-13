import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/js/highcharts-more.js';
import Heatmap from 'highcharts/modules/heatmap.js';
import Export from 'highcharts/modules/exporting.js';
import _ from 'lodash';
import '../App.css';
import localizedStrings from '../data/Localization.js'
HighchartsMore(Highcharts)        
Heatmap(Highcharts)
Export(Highcharts)
class middleview extends Component {
         
    test= () => {
        
        const testUrl = "http://melatupa.azurewebsites.net/scenarioCollection/6/region/24";
        axios.get( testUrl)
        
        .then(function (response) {
            console.log(response.data[0].scenarios);
            
            var catename = [];
            for (var categorycount = 0; categorycount < response.data[0].indicatorCategories.length; categorycount++) { 
                catename.push(response.data[0].indicatorCategories[categorycount].name);
            }
            /*var chartdata = [];
            
            var seriesname = [];

            var variable = [];
            for (var seriescount = 0; seriescount < response.data[0].scenarios.length; seriescount++) { 
                if (seriescount % 3 === 2) {
                    console.log(seriescount);
                }
                seriesname.push({"name": response.data[0].scenarios[seriescount].description,"Id":response.data[0].scenarios[seriescount].id});
            }
            console.log(seriesname);*/
            
            const categories = response.data[0].indicatorCategories.map(function (item){
                return {
                        item
                    };
            });
            
            const chart = response.data[0].values.map(function (item){
                return {
                    value: item.value,
                    Id: item.scenarioId
                };
            });

            const seriesmap = response.data[0].scenarios.map(function (item){
                return {
                    description: item.description,
                    Id: item.id
                };
            });

           /* for (var valuecount = 0; valuecount < response.data[0].values.length; valuecount++) {
                chartdata.push({"value":response.data[0].values[valuecount].value, "Id": response.data[0].values[valuecount].scenarioId});
            }*/
            console.log(chart);
            
            const res = chart.map(x => Object.assign( seriesmap.find(y => y.Id === x.Id),x));
            console.log(res);
                                    
        const options =  Highcharts.chart('test', {
            chart: {
                type: 'column'
            },
            title: {
                text: response.data[0].description
            },
            subtitle: {
                text: 'Source: http://melatupa.azurewebsites.net/scenarioCollection/6/region/24'
            },
            xAxis: {
                categories: catename
            },
            yAxis: {
                min: 0,
                max: 1,
                title: {
                    text: ''
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
           /* series:[{
            name: response.data[0].scenarios[1].description,
            data: [response.data[0].values[3].value, response.data[0].values[4].value, response.data[0].values[5].value, response.data[0].values[20].value, response.data[0].values[21].value ]
    
        }, {
            name: response.data[0].scenarios[2].description,
            data: [response.data[0].values[6].value, response.data[0].values[7].value, response.data[0].values[8].value, response.data[0].values[22].value, response.data[0].values[23].value, ]
    
        },  
        {
            name: response.data[0].scenarios[3].description,
            data: [response.data[0].values[9].value, response.data[0].values[10].value, response.data[0].values[11].value, response.data[0].values[24].value, response.data[0].values[25].value ]
    
        },
        {
            name: response.data[0].scenarios[4].description,
            data: [response.data[0].values[12].value, response.data[0].values[13].value, response.data[0].values[14].value, response.data[0].values[26].value, response.data[0].values[27].value, ]
    
        },
         {
            name: response.data[0].scenarios[5].description,
            data: [response.data[0].values[15].value, response.data[0].values[16].value, response.data[0].values[17].value, response.data[0].values[28].value, response.data[0].values[29].value, ]
    
        }]
    });*/
series: []

        });
        const tester = res.map((item,index )=>
        options.series[item.Id]= 
        {
            description: item.description,
            value: item.value
        }
    );
        const group = _.groupBy(tester, test =>{
            const namevalue = test.description;
            delete test.description;
            {return namevalue}
        });
                    
            console.log(seriesmap);
            console.log(chart);            
            console.log(group);          
            //console.log(variable);            
           // console.log(tester);
        console.log(options.series);        
        })
        .catch(function (error) {
          console.log(error);
        });

        
    }

    test3 = () => {

        const testUrl = "https://melatupa.azurewebsites.net/scenarioCollection/6/region/24";
        axios.get( testUrl)
        .then(function (response) {
        Highcharts.chart('test', {
            chart: {
                type: 'heatmap'
            },
            title: {
                text: response.data[0].description
            },
            subtitle: {
                text: 'Source: https://melatupa.azurewebsites.net/scenarioCollection/6/region/24  '
            },
            xAxis: {
                categories: [
                    response.data[0].indicatorCategories[0].name,
                    response.data[0].indicatorCategories[1].name,
                    response.data[0].indicatorCategories[2].name,
                    response.data[0].indicatorCategories[3].name,
                    response.data[0].indicatorCategories[4].name
                ],
            },
            yAxis: {
                categories: [
                    response.data[0].scenarios[0].description,
                    response.data[0].scenarios[1].description,
                    response.data[0].scenarios[2].description,
                    response.data[0].scenarios[3].description,
                    response.data[0].scenarios[4].description,
                    response.data[0].scenarios[5].description
                ],
                title: {
                    text: null
                }
            },
            colorAxis: {
                min: 0,
                minColor: '#FFFFFF',
                maxColor: Highcharts.getOptions().colors[0]
            },
    legend: {
      enabled: false
    },
            tooltip: {
                headerFormat: '<span style="font-size:10px"> {point.key} </span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>'
            },
            series: [{
                data: 
 [[0,0,response.data[0].values[0].value], [0,1,response.data[0].values[1].value], [0,2,response.data[0].values[2].value], [0,3,response.data[0].values[18].value], [0,4,response.data[0].values[19].value]
,[1,0,response.data[0].values[3].value], [1,1,response.data[0].values[4].value], [1,2,response.data[0].values[5].value], [1,3,response.data[0].values[20].value], [1,4,response.data[0].values[21].value] 
,[2,0,response.data[0].values[6].value], [2,1,response.data[0].values[7].value], [2,2,response.data[0].values[8].value], [2,3,response.data[0].values[22].value], [2,4,response.data[0].values[23].value] 
,[3,0,response.data[0].values[9].value], [3,1,response.data[0].values[10].value], [3,2,response.data[0].values[11].value], [3,3,response.data[0].values[24].value], [3,4,response.data[0].values[25].value] 
,[4,0,response.data[0].values[12].value], [4,1,response.data[0].values[13].value], [4,2,response.data[0].values[14].value], [4,3,response.data[0].values[26].value], [4,4,response.data[0].values[27].value]],
                dataLabels: {
                    enabled: true
                }
            }]
        
    })

});
        }

    test2= () => {
        console.log("ola");
        
        const testUrl = "https://melatupa.azurewebsites.net/scenarioCollection/6/region/24";
        axios.get( testUrl)
        .then(function (response) {
        Highcharts.chart('test', {
            chart: {
                type: 'column',
                polar: true
            },
            title: {
                text: response.data[0].description
            },
            subtitle: {
                text: 'Source: https://melatupa.azurewebsites.net/scenarioCollection/6/region/24  '
            },
            xAxis: {
                categories: [
                    response.data[0].indicatorCategories[0].name,
                    response.data[0].indicatorCategories[1].name,
                    response.data[0].indicatorCategories[2].name,
                    response.data[0].indicatorCategories[3].name,
                    response.data[0].indicatorCategories[4].name
                ],
            },
            yAxis: {
                max: 1
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px"> {point.key} </span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: response.data[0].scenarios[0].description,
                data: 
                    [response.data[0].values[0].value, response.data[0].values[1].value, response.data[0].values[2].value, response.data[0].values[18].value, response.data[0].values[19].value]
                
        
            }, {
                name: response.data[0].scenarios[1].description,
                data: [response.data[0].values[3].value, response.data[0].values[4].value, response.data[0].values[5].value, response.data[0].values[20].value, response.data[0].values[21].value ]
        
            }, {
                name: response.data[0].scenarios[2].description,
                data: [response.data[0].values[6].value, response.data[0].values[7].value, response.data[0].values[8].value, response.data[0].values[22].value, response.data[0].values[23].value, ]
        
            },  
            {
                name: response.data[0].scenarios[3].description,
                data: [response.data[0].values[9].value, response.data[0].values[10].value, response.data[0].values[11].value, response.data[0].values[24].value, response.data[0].values[25].value ]
        
            },
            {
                name: response.data[0].scenarios[4].description,
                data: [response.data[0].values[12].value, response.data[0].values[13].value, response.data[0].values[14].value, response.data[0].values[26].value, response.data[0].values[27].value, ]
        
            },
             {
                name: response.data[0].scenarios[5].description,
                data: [response.data[0].values[15].value, response.data[0].values[16].value, response.data[0].values[17].value, response.data[0].values[28].value, response.data[0].values[29].value, ]
        
            }]
        
    })

});


    }

    render () {

        const Url = "https://melatupa.azurewebsites.net";
        
                axios.get( Url + '/regionLevels')
                .then(function (response) {
                  console.log(response);
                  
                })
                .catch(function (error) {
                  console.log(error);
                });

        return (
    
    <div className="col-md-6">
    <div className="lightgreenBox">
        <h2 className="text-center">{localizedStrings.forestyCenter}</h2>

<div className="row">

<div id="test" className="col-md-12"> 
    <figure className="text-left" >
    test teskstti
        <br/>
    </figure>
</div>

</div>    
        <br/>
        <button type="button" className="btn btn-primary"
        onClick = {this.test} >{localizedStrings.pillar}</button>   
        <button type="button" className="btn btn-primary"
        onClick = {this.test2} >Polar</button>   
        <button type="button" className="btn btn-primary"
        onClick = {this.test3} >{localizedStrings.chart}</button>    
        </div>
        </div>
        )
    }
}

export default middleview