function convertToOldRoman(integer) {
    if (!isIntegerInRange(integer)) {
        return Error("Argument must be in the range from 1 to 3000");
    }
}

function isIntegerInRange(integer) {
    return (integer >= 1 && integer <= 3000);
}

module.exports = convertToOldRoman;