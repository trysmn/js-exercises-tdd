function addOne(array) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        newArray.push(array[index] + 1);
    }
    return newArray;
}

module.exports = addOne;