// Code your solution in this file
function findMatching(drivers, name){
  return drivers.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (drivers, str){
  return drivers.filter(function (name) {
    const strLength = str.length;
    const beginLetter = name.slice(0, strLength);
    return beginLetter === str;
  });
}

function matchName(drivers, name){
  return drivers.filter(function (driver){
    return driver.name === name;
  });
}
