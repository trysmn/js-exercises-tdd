const removeVowels = require('./remove-vowels');

test("remove vowels from word", function() {
  // Arrange
  const word = 'samuel';

  // Act
  const result = removeVowels(word);

  // Assert
  expect(result).toEqual("s_m__l");
});
