function findMatching(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(function(driver) {
    const lettersLength = letters.length;
    const startsWith = driver.slice(0, lettersLength);
    return startsWith === letters
  });
}

function matchName(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.name === string 
  });
}
