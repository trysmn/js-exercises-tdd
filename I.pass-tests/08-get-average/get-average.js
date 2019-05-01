// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function getAverageOfOnlyNumbers(arrayOfNumbersAndStrings) {
    let numbersArray = [];
    for (let arrayOfNumbersAndStringsIndex = 0; arrayOfNumbersAndStringsIndex < arrayOfNumbersAndStrings.length; arrayOfNumbersAndStringsIndex++) {
        if (typeof arrayOfNumbersAndStrings[arrayOfNumbersAndStringsIndex] === 'number') {
            numbersArray.push(arrayOfNumbersAndStrings[arrayOfNumbersAndStringsIndex]);
        }
    }
    let sumOfNumbersInArray = 0;
    for (let numbersArrayIndex = 0; numbersArrayIndex < numbersArray.length; numbersArrayIndex++) {
        sumOfNumbersInArray += numbersArray[numbersArrayIndex];
    }
    return sumOfNumbersInArray/numbersArray.length;
}

module.exports = getAverageOfOnlyNumbers;