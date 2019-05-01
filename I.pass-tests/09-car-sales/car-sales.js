function totalCarSalesForEachManufacturer(arrayOfSalesObjects) {
    let totals = {};
    for (let arrayOfSalesObjectsIndex = 0; arrayOfSalesObjectsIndex < arrayOfSalesObjects.length; arrayOfSalesObjectsIndex++) {
        if (totals[arrayOfSalesObjects[arrayOfSalesObjectsIndex].make] === undefined) {
            totals[arrayOfSalesObjects[arrayOfSalesObjectsIndex].make] = arrayOfSalesObjects[arrayOfSalesObjectsIndex].price;
        } else {
            totals[arrayOfSalesObjects[arrayOfSalesObjectsIndex].make] += arrayOfSalesObjects[arrayOfSalesObjectsIndex].price;
        }
    }
    return totals;
}

module.exports = totalCarSalesForEachManufacturer;