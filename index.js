function findMatching(array, entry){
    return array.filter(driver => driver.toLowerCase() === entry.toLowerCase())
}

function fuzzyMatch(array, entry){
    return array.filter(driver => driver.substring(0, entry.length) === entry)
}

function matchName(array, entry){
    return array.filter(driver => driver.name === entry)
}