// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed

const getLargestNumber = require('./largest-number');

test("returns largest number from an array", () => {
    // Arrange
    const inputArray = [3, 21, 36, 4, 88];
    const expectedOutput = 88;

    // Act
    const result = getLargestNumber(inputArray);

    // Assert
    expect(result).toEqual(expectedOutput);
});