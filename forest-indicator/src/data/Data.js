import axios from 'axios';
import moment from 'moment';

function getRegionLevels(){
    return new Promise((resolve, reject)=>{
    axios.get("http://melatupa.azurewebsites.net/regionLevels").then(results =>{
        console.log(results);
        //TODO: MAP THE RESULTS
        return results;
            });
        resolve(results);
            }).catch(error =>{
            console.log(error);
            reject();
        });
    }
function getRegionswithId(id){
    return new Promise((resolve, reject)=>{
        axios.get("http://melatupa.azurewebsites.net/regionLevels/"+ id +"/regions").then(results =>{
            console.log(results);
            //TODO: MAP THE RESULTS
            return results;
                });
            resolve(results);
                }).catch(error =>{
                console.log(error);
                reject();
            });
        }

function getScenarioCollection(ColledtionId,id){
    return new Promise((resolve, reject)=>{
        axios.get("http://melatupa.azurewebsites.net/scenarioCollection/"+ ColledtionId +"/region/"+id).then(results =>{
            console.log(results);
            //TODO: MAP THE RESULTS
            return results;
                });
            resolve(results);
                }).catch(error =>{
                console.log(error);
                reject();
            });
        }

export default { getRegionLevels,getRegionswithId,getScenarioCollection };