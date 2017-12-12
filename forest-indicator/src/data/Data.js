import axios from 'axios';

export function changeLang(language){
  axios.defaults.headers.get['Accept-Language'] = language;
}

function getRegionLevels() {
  return new Promise((resolve, reject) => {
    axios.get("http://melatupa.azurewebsites.net/regionLevels")
      .then(results => {
        const items = results.data.map(element => {
          return element;
        })
        resolve(items);
      }).catch(error => {
        console.log("Error getting items");
        reject();
      })
  });
}
function getRegionswithId(id) {
  return new Promise((resolve, reject) => {
    axios.get("http://melatupa.azurewebsites.net/regionLevels/" + id + "/regions").then(results => {
      const items = results.data.map(element => {
        return element;
      })
      resolve(items);
    }).catch(error => {
      console.log("Error getting items");
      reject();
    })
  });
}

export function getScenarioCollection(ColledtionId, id) {
  return new Promise((resolve, reject) => {
    axios.get("http://melatupa.azurewebsites.net/scenarioCollection/" + ColledtionId + "/region/" + id).then(results => {
      const items = results.data.map(element => {
        return element;
      })
      resolve(items);
    }).catch(error => {
      console.log("Error getting items");
      reject();
    })
  });
}

export default { getRegionLevels, getRegionswithId, getScenarioCollection, changeLang };