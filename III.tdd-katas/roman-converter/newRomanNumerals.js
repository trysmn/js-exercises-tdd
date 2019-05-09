const { convertToOldRoman } = require("./oldRomanNumerals");

function convertToNewRoman(integer) {
    let oldStyleRomanNumeral = convertToOldRoman(integer);
    let newStyleRomanNumeral;
    const integerDigitsArray = String(integer).split("");
    for (let integerDigitsArrayIndex = 0; integerDigitsArrayIndex < integerDigitsArray.length; integerDigitsArrayIndex++) {
        if (integerDigitsArrayIndex === integerDigitsArray.length - 1 && integerDigitsArray[integerDigitsArrayIndex] === '4') {
            newStyleRomanNumeral = oldStyleRomanNumeral.replace("IIII","IV");
        } else if (integerDigitsArrayIndex === integerDigitsArray.length - 1 && integerDigitsArray[integerDigitsArrayIndex] === '9') {
            newStyleRomanNumeral = oldStyleRomanNumeral.replace("VIIII","IX");
        } else if (integerDigitsArrayIndex === integerDigitsArray.length - 2 && integerDigitsArray[integerDigitsArrayIndex] === '4') {
            newStyleRomanNumeral = oldStyleRomanNumeral.replace("XXXX","XL");
        } else if (integerDigitsArrayIndex === integerDigitsArray.length - 2 && integerDigitsArray[integerDigitsArrayIndex] === '9') {
            newStyleRomanNumeral = oldStyleRomanNumeral.replace("LXXXX","XC");
        } else if (integerDigitsArrayIndex === integerDigitsArray.length - 3 && integerDigitsArray[integerDigitsArrayIndex] === '4') {
            newStyleRomanNumeral = oldStyleRomanNumeral.replace("CCCC","CD");
        } else if (integerDigitsArrayIndex === integerDigitsArray.length - 3 && integerDigitsArray[integerDigitsArrayIndex] === '9') {
            newStyleRomanNumeral = oldStyleRomanNumeral.replace("DCCCC","CM");
        }
    }
    return newStyleRomanNumeral;
}

console.log(convertToNewRoman(4));

module.exports = convertToNewRoman;