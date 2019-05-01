function addNumbers(numbersArray) {
    let count = 0;
    for (let numbersArrayIndex = 0; numbersArrayIndex < numbersArray.length; numbersArrayIndex++) {
        count += numbersArray[numbersArrayIndex];
    }
    return count;
}

module.exports = addNumbers;
