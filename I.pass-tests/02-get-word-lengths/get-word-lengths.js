const getWordLengths = function(wordsArray) {
    const wordLengthsArray = [];
    for (let wordsArrayIndex = 0; wordsArrayIndex < wordsArray.length; wordsArrayIndex++) {
        wordLengthsArray.push(wordsArray[wordsArrayIndex].length);
    }
    return wordLengthsArray;
};

module.exports = getWordLengths;
