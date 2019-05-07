function fizzBuzz(upperLimitInteger) {
    let integerArray = [];
    for (let countingInteger = 1; countingInteger <= upperLimitInteger; countingInteger++) {
        if (countingInteger % 3 === 0 && countingInteger % 5 === 0) {
            integerArray.push("FizzBuzz");
        } else if (countingInteger % 3 === 0) {
            integerArray.push("Fizz");
        } else if (countingInteger % 5 === 0) {
            integerArray.push("Buzz");
        } else {
            integerArray.push(countingInteger);
        }
    }
    return integerArray;
}

module.exports = fizzBuzz;