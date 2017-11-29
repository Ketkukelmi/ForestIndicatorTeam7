import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import testimg from './test.png';
import axios from 'axios';
import Highcharts from 'highcharts';
import $ from 'jquery';
import ReactTable from 'react-table';
import Cors from 'cors-anywhere';
class middleview extends Component {
     
    
    test= () => {
        console.log("ola");
        Highcharts.chart('test', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Monthly Average Rainfall'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Rainfall (mm)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
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
                name: 'Tokyo',
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        
            }, {
                name: 'New York',
                data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
        
            }, {
                name: 'London',
                data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
        
            }, {
                name: 'Berlin',
                data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
        
            }]
        });
    }

    test3 = () => {
        console.log("hei");
        const data = [{
            name: 'Tanner Linsley',
            age: 26,
            friend: {
              name: 'Jason Maurer',
              age: 23,
            }
          }]
        
          const columns = [{
            Header: 'Name',
            accessor: 'name' // String-based value accessors!
          }, {
            Header: 'Age',
            accessor: 'age',
            Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
          }, {
            id: 'friendName', // Required because our accessor is not a string
            Header: 'Friend Name',
            accessor: d => d.friend.name // Custom value accessors!
          }, {
            Header: props => <span>Friend Age</span>, // Custom header components!
            accessor: 'friend.age'
          }]
        
          return <ReactTable
          data={data}
          columns={columns}
        />
        }

    test2= () => {
        console.log("ola");
Highcharts.chart('test', {
    
        chart: {
            polar: true
        },
    
        title: {
            text: 'Highcharts Polar Chart'
        },
    
        pane: {
            startAngle: 0,
            endAngle: 360
        },
    
        xAxis: {
            tickInterval: 45,
            min: 0,
            max: 360,
            labels: {
                formatter: function () {
                    return this.value + '°';
                }
            }
        },
    
        yAxis: {
            min: 0
        },
    
        plotOptions: {
            series: {
                pointStart: 0,
                pointInterval: 45
            },
            column: {
                pointPadding: 0,
                groupPadding: 0
            }
        },
    
        series: [{
            type: 'column',
            name: 'Column',
            data: [8, 7, 6, 5, 4, 3, 2, 1],
            pointPlacement: 'between'
        }, {
            type: 'line',
            name: 'Line',
            data: [1, 2, 3, 4, 5, 6, 7, 8]
        }, {
            type: 'area',
            name: 'Area',
            data: [1, 8, 2, 7, 3, 6, 4, 5]
        }]
    });

    }

    render () {
        const Url = "http://melatupa.azurewebsites.net";
        
                axios.get( 'https://cors-anywhere.herokuapp.com/' + Url + '/regionLevels')
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });

        return (
    <div className="col-md-6">
        <h2 className="text-center">Alue</h2>

<div className="row">

<div id="test" className="col-md-12" > 
    <figure className="text-left" >
        <br/>

    </figure>
</div>

</div>    
        <br/>
        <button type="button" className="btn btn-primary"
        onClick = {this.test} >Kaavio 1</button>   
        <button type="button" className="btn btn-primary"
        onClick = {this.test2} >Kaavio 2</button>   
        <button type="button" className="btn btn-primary"
        onClick = {this.test3} >Taulukko</button>   
        <button type="button" className="btn btn-primary pull-right">Lataa</button>   
        <button type="button" className="btn btn-primary pull-right"
        onClick = {() => window.print()}>Printtaa</button>   
        </div>
        )
    }
}

export default middleview