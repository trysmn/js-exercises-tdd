// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];

const getEvenNumbers = require('./get-even-numbers');

test("returns even numbers from array", () => {
    // Arrange
    const inputArray = [22, 13, 73, 82, 4];
    const expectedOutput = [22, 82, 4];

    // Act
    const result = getEvenNumbers(inputArray);

    // Assert
    expect(result).toEqual(expectedOutput);
});