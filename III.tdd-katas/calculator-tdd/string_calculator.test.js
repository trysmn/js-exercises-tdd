const stringCalculator = require('./string_calculator');

describe("String Calculator", () => {
    test("should return 0 given an empty string containing no numbers", () => {
        // Arrange
        const inputString = "";
        const expectedOutput = 0;

        // Act
        const result = stringCalculator(inputString);

        // Assert
        expect(result).toEqual(expectedOutput);
    }),

    test("should return 0 given an invalid input type (not a string)", () => {
        // Arrange
        const inputString = 20;
        const expectedOutput = Error("Invalid argument type");

        // Act
        const result = stringCalculator(inputString);

        // Assert
        expect(result).toEqual(expectedOutput);
    }),

    test("should return the sum of all numbers given in the input string", () => {
        // Arrange
        const inputString = "1,2,3";
        const expectedOutput = 6;

        // Act
        const result = stringCalculator(inputString);

        // Assert
        expect(result).toEqual(expectedOutput);
    });
});