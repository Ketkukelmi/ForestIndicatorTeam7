function getRegionLevels(regionLevelData) {
  if(typeof regionLevelData !== "undefined") {
    const regionArray = regionLevelData.map(element => {
      return {
        id: element.id,
        name: element.name,
        description: element.description,
        order:  element.order
      }
    })
    return regionArray;
  } else {
    const regionArray = []
    return regionArray;
  }
}

function getRegions(regionData) {  
  if(typeof regionData !== "undefined") {
    const regionArray = regionData.map(element => {
        return {
          id: element.id,
          name: element.name,
          shortName: element.shortName,
          order: element.order,
          scenarioCollections: element.scenarioCollections
        }
    })
    return regionArray;
  } else {
    const regionArray = []
    return regionArray;
  }
}

function getScenarioCollection(regionData, id) {
  var scenarioCollection = [];
  regionData.forEach(element => {
    if(element.id === id) {
      scenarioCollection = element.scenarioCollections;
    } 
  });
  scenarioCollection = scenarioCollection.map(element => {
      return {
        id: element.id,
        name: element.name,
        description: element.description
      }
  })
  return scenarioCollection;    
}

function getScenarios(scenarioData) {
  if(typeof scenarioData !== "undefined"){
    var scenario = scenarioData["0"].scenarios.map(element => {
        return {
          id: element.id,
          description: element.description,
          name: element.name,
          order: element.order,
          shortName: element.shortName
        }
    })
    return scenario;  
  } else {
    const scenario = []
    return scenario;
  }
}

function getTimePeriods(timePeriodData) {
  const timePeriods = timePeriodData["0"].timePeriods.map(element => {
    return {
      id: element.id,
      yearStart: element.yearStart,
      yearEnd: element.yearEnd
    }
  })
  return timePeriods;
}

function getIndicatorCategories(indicatorData) {
  const indicatorCategories = indicatorData["0"].indicatorCategories.map(element => {
    return { 
      id: element.id,
      name: element.name,
      description: element.description,
      isMandatory: element.isMandatory,
      order: element.order,
      indicators: element.indicators,
    }
  })
  return indicatorCategories;
}

function getIndicators(id, indicatorCategory) {
  if(typeof indicatorCategory !== "undefined") {    
    indicatorCategory.forEach(element => {
      if(element.id === id) {
        indicatorCategory = element;
      } 
    });
    if(typeof indicatorCategory.indicators !== "undefined") {
      var indicators = indicatorCategory.indicators.map(element => {
          return {
            id: element.id,
            name: element.name,
            description: element.description,
            absVar: element.absVar,
            order: element.order
          }
      })
    } else {
      indicators = []
    }
  }
  else {
    indicators = []
  }
  return indicators;
}

function getAllValues(valueData) {
  if(typeof valueData !== "undefined"){
    var value = valueData["0"].values.map(element => {
        return {
          scenarioId: element.scenarioId,
          indicatorId: element.indicatorId,
          timePeriodId: element.timePeriodId,
          value: element.value
        }
    })
    return value;  
  } else {
    const value = []
    return value;
  }
}

function createOptions(array){
  let options = [];
  array.forEach(element => {
      let value = element.id;
      let label = element.name;
      let singleObject = {value, label}
      options.push(singleObject);
  });
  return options
}

function createTimeOptions(array){
  let options = [];
  array.forEach(element => {
      let value = element.id;
      let label = element.yearStart + "-" + element.yearEnd;
      let singleObject = {value, label}
      options.push(singleObject);
  });
  return options
}

function createDescriptionAsNameOptions(array){
  let options = [];
  array.forEach(element => {
      let value = element.id;
      let label = element.description;
      let singleObject = {value, label}
      options.push(singleObject);
  });
  return options
}


export default {
  createTimeOptions, 
  createDescriptionAsNameOptions, 
  getRegionLevels, 
  getRegions, 
  getScenarios, 
  getTimePeriods, 
  getScenarioCollection, 
  getIndicators, 
  createOptions, 
  getIndicatorCategories,
  getAllValues
}