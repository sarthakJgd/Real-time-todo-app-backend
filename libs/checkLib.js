let trim = (x) => {
  let value = String(x)
  return value.replace(/^\s+|\s+$/gm, '')
}

let isEmpty = (value) => {
  
  if (value === null || value === undefined || trim(value) === '' || value.length === 0) {
    console.log(value)
    return true
  } else {
    return false
  }
}

/**
 * exporting functions.
 */
module.exports = {
  isEmpty: isEmpty
}
