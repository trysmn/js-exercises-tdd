const { convertToOldRoman } = require("./oldRomanNumerals");

function convertToNewRoman(integer) {
    let oldStyleRomanNumeral = convertToOldRoman(integer);
    let newStyleRomanNumeral;
    const integerDigitsArray = String(integer).split("");
    for (let integerDigitsArrayIndex = 0; integerDigitsArrayIndex < integerDigitsArray.length; integerDigitsArrayIndex++) {
        if (isDigitInColumn(integerDigitsArrayIndex, integerDigitsArray.length - 1) && isDigitSpecial(integerDigitsArray[integerDigitsArrayIndex],'4')) {
            newStyleRomanNumeral = oldStyleRomanNumeral.replace("IIII","IV");
        } else if (isDigitInColumn(integerDigitsArrayIndex, integerDigitsArray.length - 1) && isDigitSpecial(integerDigitsArray[integerDigitsArrayIndex],'9')) {
            newStyleRomanNumeral = oldStyleRomanNumeral.replace("VIIII","IX");
        } else if (isDigitInColumn(integerDigitsArrayIndex, integerDigitsArray.length - 2) && isDigitSpecial(integerDigitsArray[integerDigitsArrayIndex],'4')) {
            newStyleRomanNumeral = oldStyleRomanNumeral.replace("XXXX","XL");
        } else if (isDigitInColumn(integerDigitsArrayIndex, integerDigitsArray.length - 2) && isDigitSpecial(integerDigitsArray[integerDigitsArrayIndex],'9')) {
            newStyleRomanNumeral = oldStyleRomanNumeral.replace("LXXXX","XC");
        } else if (isDigitInColumn(integerDigitsArrayIndex, integerDigitsArray.length - 3) && isDigitSpecial(integerDigitsArray[integerDigitsArrayIndex],'4')) {
            newStyleRomanNumeral = oldStyleRomanNumeral.replace("CCCC","CD");
        } else if (isDigitInColumn(integerDigitsArrayIndex, integerDigitsArray.length - 3) && isDigitSpecial(integerDigitsArray[integerDigitsArrayIndex],'9')) {
            newStyleRomanNumeral = oldStyleRomanNumeral.replace("DCCCC","CM");
        }
    }
    return newStyleRomanNumeral;
}

function isDigitInColumn(digitLocation, column) {
    return digitLocation === column;
}

function isDigitSpecial(integer, specialInteger) {
    return integer === specialInteger;
}

convertToNewRoman(4);

module.exports = convertToNewRoman;