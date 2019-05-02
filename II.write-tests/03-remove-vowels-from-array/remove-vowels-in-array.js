const removeVowels = require("../02-remove-vowels/remove-vowels");

function removeVowelsForWords(wordsArray) {
  const result = wordsArray.map(function(word) {
    return removeVowels(word);
  });
  return result;
}

module.exports = removeVowelsForWords;

/*
    input: ["Irina", "Etza", "Daniel"]
    expected output: ["rn", "tz", "Dnl"]
*/
