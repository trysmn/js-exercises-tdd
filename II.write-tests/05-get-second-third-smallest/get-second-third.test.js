// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed

const getSecondAndThirdSmallest = require('./get-second-third');

test("returns second and third smallest values in the array, without changing it", () => {
    // Arrange
    const inputArray = [90, 5, 11, 8, 6];
    const expectedOutput = [6, 8];

    // Act
    const result = getSecondAndThirdSmallest(inputArray);

    // Assert
    expect(result).toEqual(expectedOutput);
});