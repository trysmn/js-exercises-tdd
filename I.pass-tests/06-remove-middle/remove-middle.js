function removeMiddle(wordsArray) {
    if (wordsArray.length % 2 === 1) {
        let middleWordArray = [];
        const middleIndex = Math.ceil(wordsArray.length / 2) - 1;
        middleWordArray.push(wordsArray[middleIndex]);
        wordsArray.splice(middleIndex, 1);
        return middleWordArray;
    }
}

module.exports = removeMiddle;