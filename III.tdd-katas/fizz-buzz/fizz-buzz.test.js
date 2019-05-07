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
    expect(result).toEqual([1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz","Fizz",14,"FizzBuzz"]);
  }),

  test("should print Fizz if integer has the digit 3 in it, but is not divisible by 5", () => {
    // Arrange
    const upperLimitInteger = 13;

    // Act
    const result = fizzBuzz(upperLimitInteger);

    // Assert
    expect(result).toEqual([1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz","Fizz"]);
  }),

  test("should print Buzz if integer has the digit 5 in it, but is not divisible by 3", () => {
    // Arrange
    const upperLimitInteger = 25;

    // Act
    const result = fizzBuzz(upperLimitInteger);

    // Assert
    expect(result).toEqual([1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz","Fizz",14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,"Fizz","Fizz","Buzz"]);
  });
});



