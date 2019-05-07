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
    });
});