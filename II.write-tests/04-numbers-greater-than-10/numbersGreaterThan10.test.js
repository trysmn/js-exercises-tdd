const largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function() {
    // Arrange
    const inputArray = [4, 10, 32, 9, 21];
    const expectedOutput = [32, 21];

    // Call
    const result = largerThanTen(inputArray);
    console.log(result);

    // Assert
    expect(result).toEqual(expectedOutput);
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
