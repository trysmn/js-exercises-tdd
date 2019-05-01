function findIndexOfElement(words, element) {
    for (let wordsIndex = 0; wordsIndex < words.length; wordsIndex++) {
        if (words[wordsIndex] === element) {
            return wordsIndex;
        }
    }
}

module.exports = findIndexOfElement;
