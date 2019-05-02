const removeVowelsFromWords = require('./remove-vowels-in-array');

test("remove vowels from all words in array", function() {
  // Arrange
  const wordsArray = ["Irina", "Etza", "Daniel"];
  const expectedOutput = ["rn", "tz", "Dnl"];

  // Act
  const result = removeVowelsFromWords(wordsArray);

  // Assert
  expect(result).toEqual(expectedOutput);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
