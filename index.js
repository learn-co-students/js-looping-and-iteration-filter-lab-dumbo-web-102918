// Code your solution in this file
function findMatching(list, name) {
  return list.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  })
}

function fuzzyMatch(list, firstLetter) {
  let length = firstLetter.length;
  return list.filter(function(driverName) {
    return driverName.slice(0, length) === firstLetter;
  });
}

function matchName(list, name) {
  return list.filter(function(driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
