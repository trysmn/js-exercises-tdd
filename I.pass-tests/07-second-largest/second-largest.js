function secondLargestNumber(numbersArray) {
    sortedArray = numbersArray.sort((a,b) => {
        return a - b;    
    });
    return sortedArray[sortedArray.length - 2];
}

secondLargestNumber([2, 0, 23, 0, 57, 1, 230]);

module.exports = secondLargestNumber;