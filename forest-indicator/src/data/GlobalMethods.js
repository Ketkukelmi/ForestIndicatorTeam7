function parseNameAndValue(data) {
  var data = JSON.parse(data);
  let dataArray = []

  data.forEach(element => {
    let label = element.name;
    let value = element.name;
    let singleObject = {value, label};
    dataArray.push(singleObject);
  });
  return dataArray;
};

export default {parseNameAndValue}