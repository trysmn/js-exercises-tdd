const { convertToOldRoman, findLargestDenominationThatMakesUpInteger, howManyOfDenomination } = require('./oldRomanNumerals');

describe("convertToOldRoman function", () => {
    test("should reject an input number less than 1", () => {
        // Arrange
        const inputNum = 0;
        const expectedOutput = Error("Argument must be in the range from 1 to 3000");

        // Act
        const result = convertToOldRoman(inputNum);

        // Assert
        expect(result).toEqual(expectedOutput);
    }),

    test("should reject an input number greater than 3000", () => {
        // Arrange
        const inputNum = 3001;
        const expectedOutput = Error("Argument must be in the range from 1 to 3000");

        // Act
        const result = convertToOldRoman(inputNum);

        // Assert
        expect(result).toEqual(expectedOutput);
    }),

    test("should reject an input that is not a number", () => {
        // Arrange
        const inputNum = "23";
        const expectedOutput = Error("Argument must be a number");

        // Act
        const result = convertToOldRoman(inputNum);

        // Assert
        expect(result).toEqual(expectedOutput);
    }),

    test("should convert the integer input in to its old roman numeral equivalent", () => {
        // Arrange
        const inputNum1 = 3;
        const expectedOutput1 = "III";
        const inputNum2 = 38;
        const expectedOutput2 = "XXXVIII";
        const inputNum3 = 76;
        const expectedOutput3 = "LXXVI";
        const inputNum4 = 145;
        const expectedOutput4 = "CXXXXV";
        const inputNum5 = 653;
        const expectedOutput5 = "DCLIII";
        const inputNum6 = 2231;
        const expectedOutput6 = "MMCCXXXI";

        // Act
        const result1 = convertToOldRoman(inputNum1);
        const result2 = convertToOldRoman(inputNum2);
        const result3 = convertToOldRoman(inputNum3);
        const result4 = convertToOldRoman(inputNum4);
        const result5 = convertToOldRoman(inputNum5);
        const result6 = convertToOldRoman(inputNum6);

        // Assert
        expect(result1).toEqual(expectedOutput1);
        expect(result2).toEqual(expectedOutput2);
        expect(result3).toEqual(expectedOutput3);
        expect(result4).toEqual(expectedOutput4);
        expect(result5).toEqual(expectedOutput5);
        expect(result6).toEqual(expectedOutput6);
    });
})

describe("findLargestDenominationThatMakesUpInteger function", () => {
    test("should find the largest denomination that makes up an integer", () => {
        // Arrange
        const inputNumber1 = 24;
        const expectedOutput1 = "X";
        const inputNumber2 = 124;
        const expectedOutput2 = "C";
        const inputNumber3 = 524;
        const expectedOutput3 = "D";

        // Act
        const result1 = findLargestDenominationThatMakesUpInteger(inputNumber1);
        const result2 = findLargestDenominationThatMakesUpInteger(inputNumber2);
        const result3 = findLargestDenominationThatMakesUpInteger(inputNumber3);

        // Assert
        expect(result1).toEqual(expectedOutput1);
        expect(result2).toEqual(expectedOutput2);
        expect(result3).toEqual(expectedOutput3);
    });
})

describe("howManyOfDenomination function", () => {
    test("should find how many of the largest denomination that makes up an integer", () => {
        // Arrange
        const inputNumber1 = 24;
        const largestDenomination1 = "X";
        const expectedOutput1 = 2;
        const inputNumber2 = 124;
        const largestDenomination2 = "C";
        const expectedOutput2 = 1;
        const inputNumber3 = 524;
        const largestDenomination3 = "D";
        const expectedOutput3 = 1;

        // Act
        const result1 = howManyOfDenomination(inputNumber1, largestDenomination1);
        const result2 = howManyOfDenomination(inputNumber2, largestDenomination2);
        const result3 = howManyOfDenomination(inputNumber3, largestDenomination3);

        // Assert
        expect(result1).toEqual(expectedOutput1);
        expect(result2).toEqual(expectedOutput2);
        expect(result3).toEqual(expectedOutput3);
    });
})