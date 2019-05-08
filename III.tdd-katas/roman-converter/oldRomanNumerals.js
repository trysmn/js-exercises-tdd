function convertToOldRoman(integer) {
    if (!isArgumentInRange(integer)) {
        return Error("Argument must be in the range from 1 to 3000");
    } else if (!isArgumentTheCorrectType(integer)) {
        return Error("Argument must be a number");
    }
}

function isArgumentInRange(integer) {
    return (integer >= 1 && integer <= 3000);
}

function isArgumentTheCorrectType(integer) {
    return (typeof integer === 'integer');
}

module.exports = convertToOldRoman;