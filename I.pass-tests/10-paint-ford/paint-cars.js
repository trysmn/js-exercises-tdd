function paint(arrayOfCarObjects, colourToBePainted) {
    let repaintedCars = [];
    for (let arrayOfCarObjectsIndex = 0; arrayOfCarObjectsIndex < arrayOfCarObjects.length; arrayOfCarObjectsIndex++) {
        if (arrayOfCarObjects[arrayOfCarObjectsIndex].make === "Ford") {
            repaintedCars.push({ make: "Ford", model: "Fiesta", colour: colourToBePainted });
        } else {
            repaintedCars.push(arrayOfCarObjects[arrayOfCarObjectsIndex]);
        }
    }
    return repaintedCars;
}

module.exports = paint;