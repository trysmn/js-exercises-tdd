function removeMiddle(wordsArray) {
    if (wordsArray.length % 2 === 1) {
        let middleWordArray = [];
        const middleIndex = Math.ceil(wordsArray.length / 2);
        console.log(middleIndex);
        middleWordArray.push(wordsArray[middleIndex - 1]);
        wordsArray.splice(wordsArray[middleIndex - 1], 1);
        return middleWordArray;
    }
}

module.exports = removeMiddle;