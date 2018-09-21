module.exports = function getZerosCount(number) {
  return getDivisionOnFive(number,1);
}

function getDivisionOnFive(number, power) {
  const delimeter = Math.pow(5, power);
  return number > delimeter ? 
    Math.floor(number / delimeter) + getDivisionOnFive(number, ++power)
    : Math.floor(number / delimeter);
}