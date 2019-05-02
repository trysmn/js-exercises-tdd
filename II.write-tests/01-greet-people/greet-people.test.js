const greetPeople = require('./greet-people');

test("print list of names prefixed with Hello", function() {
  // Arrange
  const mentors = ['Irina', 'Ashleigh', 'Etza'];
  const expectedResult = "Hello IrinaAshleighEtza";

  // Act
  const result = greetPeople(mentors);

  // Assert
  expect(result).toEqual(expectedResult);
});
