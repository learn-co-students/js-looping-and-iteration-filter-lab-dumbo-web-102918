// Code your solution in this file
function findMatching(array, value){
  return array.filter(function (name) { return name.toLowerCase() === value.toLowerCase()})
}

function fuzzyMatch(array, value){
  return array.filter(function (name) {return value[0]===name[0]})
}

function matchName(array, value){
  return array.filter(function (person) {return person.name === value})
}
