function stringCalculator(stringOfNumbers) {
    if (stringOfNumbers === "") {
        return 0;
    } else if (typeof stringOfNumbers !== 'string') {
        return Error("Invalid argument type");
    } else {
        if (stringOfNumbers.includes("\n")) {
            delimiter = "\n";
        } else {
            delimiter = ",";
        }
        const numbersArray = stringOfNumbers.split(delimiter);
        let count = 0;
        numbersArray.map((element) => {
            count += parseInt(element);
        });
        return count;
    }
}

module.exports = stringCalculator;