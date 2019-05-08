const { denominationsHash, denominationsArray } = require('./denominationsObjects');

function convertToOldRoman(integer) {
    if (!isArgumentInRange(integer)) {
        return Error("Argument must be in the range from 1 to 3000");
    } else if (!isArgumentTheCorrectType(integer)) {
        return Error("Argument must be a number");
    } else {
        let oldRomanString = "";
        let updatedInteger = integer;
        let largestDenominationThatMakesUpInteger;
        let multipleOfDenomination;

        while (updatedInteger > 0) {
            largestDenominationThatMakesUpInteger = findLargestDenominationThatMakesUpInteger(updatedInteger);
            multipleOfDenomination = howManyOfDenomination(updatedInteger, largestDenominationThatMakesUpInteger);
            oldRomanString = addToOldRomanString(oldRomanString, multipleOfDenomination, largestDenominationThatMakesUpInteger);
            updatedInteger = updatedInteger - (denominationsHash[largestDenominationThatMakesUpInteger] * multipleOfDenomination);
        }
        
        return oldRomanString;
    }
}

function isArgumentInRange(integer) {
    return (integer >= 1 && integer <= 3000);
}

function isArgumentTheCorrectType(integer) {
    return (typeof integer === 'number');
}

function findLargestDenominationThatMakesUpInteger(integer) {
    for (let denominationIndex in denominationsArray) {
        if (integer - denominationsHash[denominationsArray[denominationsArray.length - 1]] >= 0) {
            return denominationsArray[denominationsArray.length - 1];
        } else if (integer - denominationsHash[denominationsArray[denominationIndex]] < 0) {
            return denominationsArray[denominationsArray.indexOf(denominationsArray[denominationIndex]) - 1];
        }
    }
}

function howManyOfDenomination(integer, denomination) {
    let denominationCount = 1;
    while (integer - (denominationsHash[denomination] * denominationCount) >= 0) {
        denominationCount += 1;
    }
    return denominationCount - 1;
}

function addToOldRomanString(oldRomanString, multipleOfDenomination, largestDenominationThatMakesUpInteger) {
    for (let index = 1; index <= multipleOfDenomination; index++) {
        oldRomanString = oldRomanString + largestDenominationThatMakesUpInteger;
    }
    return oldRomanString;
}

module.exports = { convertToOldRoman, findLargestDenominationThatMakesUpInteger, howManyOfDenomination };