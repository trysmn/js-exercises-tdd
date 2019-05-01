function formatCities(arrayOfCapitals, stringInterpolationFunction) {
    let expectedArrayOfCapitalCountryStrings = [];
    for (let arrayOfCapitalsIndex = 0; arrayOfCapitalsIndex < arrayOfCapitals.length; arrayOfCapitalsIndex++) {
        expectedArrayOfCapitalCountryStrings.push(
            stringInterpolationFunction(
                arrayOfCapitals[arrayOfCapitalsIndex].city, arrayOfCapitals[arrayOfCapitalsIndex].country
            )
        );
    }
    return expectedArrayOfCapitalCountryStrings;
}

module.exports = formatCities;