const { denominationsHash, denominationsArray } = require('./denominationsObjects');

function convertToOldRoman(integer) {
    if (!isArgumentInRange(integer)) {
        return Error("Argument must be in the range from 1 to 3000");
    } else if (!isArgumentTheCorrectType(integer)) {
        return Error("Argument must be a number");
    } else {
        return calculateOldRomanString(integer);
    }
}

function isArgumentInRange(integer) {
    return (integer >= 1 && integer <= 3000);
}

function isArgumentTheCorrectType(integer) {
    return (typeof integer === 'number');
}

function calculateOldRomanString(integer) {
    let oldRomanString = "";
    let updatedInteger = integer;
    let largestDenominationThatMakesUpInteger;
    let multipleOfDenomination;
    
    while (updatedInteger > 0) {
        largestDenominationThatMakesUpInteger = findLargestDenominationThatMakesUpInteger(updatedInteger);
        multipleOfDenomination = howManyOfDenomination(updatedInteger, largestDenominationThatMakesUpInteger);
        oldRomanString = addToOldRomanString(oldRomanString, multipleOfDenomination, largestDenominationThatMakesUpInteger);
        updatedInteger -= updateValueOfInteger(largestDenominationThatMakesUpInteger, multipleOfDenomination);
    }
    
    return oldRomanString;
}

function findLargestDenominationThatMakesUpInteger(integer) {
    for (let denominationIndex in denominationsArray) {
        if (isIntegerLargerThan1000(integer)) {
            return largestDenominationPossible();
        } else if (isIntegerLargerThanCurrentDenomination(integer, denominationIndex)) {
            return largestDenominationThatIsSmallerThanInteger(denominationIndex);
        }
    }
}

function largestDenominationThatIsSmallerThanInteger(denominationIndex) {
    return denominationsArray[denominationsArray.indexOf(denominationsArray[denominationIndex]) - 1];
}

function largestDenominationPossible() {
    return denominationsArray[denominationsArray.length - 1]
}

function isIntegerLargerThanCurrentDenomination(integer, denominationIndex) {
    return (integer - denominationsHash[denominationsArray[denominationIndex]] < 0);
}

function isIntegerLargerThan1000(integer) {
    return (integer - denominationsHash[denominationsArray[denominationsArray.length - 1]] >= 0);
}

function howManyOfDenomination(integer, denomination) {
    let denominationCount = 1;
    while (isMultipleOfDenominationLessThanInteger(integer, denomination, denominationCount)) {
        denominationCount += 1;
    }
    return denominationCount - 1;
}

function isMultipleOfDenominationLessThanInteger(integer, denomination, denominationCount) {
    return (integer - (denominationsHash[denomination] * denominationCount) >= 0);
}

function addToOldRomanString(oldRomanString, multipleOfDenomination, largestDenominationThatMakesUpInteger) {
    for (let index = 1; index <= multipleOfDenomination; index++) {
        oldRomanString = oldRomanString + largestDenominationThatMakesUpInteger;
    }
    return oldRomanString;
}

function updateValueOfInteger(largestDenominationThatMakesUpInteger, multipleOfDenomination) {
    return (denominationsHash[largestDenominationThatMakesUpInteger] * multipleOfDenomination);
}

module.exports = { convertToOldRoman, findLargestDenominationThatMakesUpInteger, howManyOfDenomination };