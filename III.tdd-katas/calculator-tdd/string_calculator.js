function stringCalculator(stringOfNumbers) {
    if (stringOfNumbers === "") {
        return 0;
    } else if (typeof stringOfNumbers !== 'string') {
        return Error("Invalid argument type");
    } else {
        delimiter = stringOfNumbers.split("")[0];
        let numbersArray = stringOfNumbers.split(delimiter);
        numbersArray.shift(0);
        let count = 0;
        let exceptionsArray = [];
        if (stringOfNumbers.includes("-")) {
            numbersArray.map((element) => {
                if (parseInt(element) < 0) {
                    exceptionsArray.push(parseInt(element));
                }
            })
            return `Negative numbers not allowed: ${exceptionsArray}`;
        } else {
            numbersArray.map((element) => {
                count += parseInt(element);
            })
            return count;
        }
    }
}

module.exports = stringCalculator;