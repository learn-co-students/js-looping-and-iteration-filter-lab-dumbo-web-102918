// Code your solution in this file
function findMatching(list, name) {
  return list.filter(function(driverName){
    return driverName.toLowerCase() === name.toLowerCase();
  });
};
function fuzzyMatch(list, str) {
  return list.filter(function(driverName) {
    return driverName.startsWith(str)
  });
};
function matchName(list, str) {
  return list.filter(function(driver) {
    return driver.name === str;
  });
};
