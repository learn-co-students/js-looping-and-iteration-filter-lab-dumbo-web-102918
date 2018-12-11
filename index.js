// Code your solution in this file
function matchName (drivers, driverName) {
  return drivers.filter(function (user) {return user.name.toLowerCase() === driverName.toLowerCase(); })
}

function fuzzyMatch(drivers, driverName) {
  return drivers.filter(function (user){return user.slice(0,2) === driverName.slice(0,2);})
}



function findMatching(drivers, driverName) {
  return drivers.filter(function (user) {return user.toLowerCase() === driverName.toLowerCase(); })
}
