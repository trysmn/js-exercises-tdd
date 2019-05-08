const convertToOldRoman = require('./oldRomanNumerals');

describe("Old Roman Numeral Calculator", () => {
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
    });
})