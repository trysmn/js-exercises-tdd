function stringCalculator(stringOfNumbers) {
    if (stringOfNumbers === "") {
        return 0;
    } else if (typeof stringOfNumbers !== 'string') {
        return Error("Invalid argument type");
    } else {
        const numbersArray = stringOfNumbers.split(",");
        let count = 0;
        numbersArray.map((element) => {
            count += parseInt(element);
        });
        return count;
    }
}

module.exports = stringCalculator;