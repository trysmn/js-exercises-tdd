const fizzBuzz = require("./fizz-buzz");

describe("Fizz Buzz", () => {
  test("should print Fizz if integer is a multiple of 3", () => {
    // Arrange
    const upperLimitInteger = 3;

    // Act
    const result = fizzBuzz(upperLimitInteger);

    // Assert
    expect(result).toEqual([1,2,"Fizz"]);
  }),

  test("should print Buzz if integer is a multiple of 5", () => {
    // Arrange
    const upperLimitInteger = 5;

    // Act
    const result = fizzBuzz(upperLimitInteger);

    // Assert
    expect(result).toEqual([1,2,"Fizz",4,"Buzz"]);
  }),

  test("should print FizzBuzz if integer is a multiple of 3 and 5", () => {
    // Arrange
    const upperLimitInteger = 15;

    // Act
    const result = fizzBuzz(upperLimitInteger);

    // Assert
    expect(result).toEqual([1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]);
  })
}
);



