const addAllnumbers = require("./add-numbers");

test("Add all numbers", function() {
  const numbers = [9, 23, 10, 3, 8];
  const expected = 53;

  const output = addAllnumbers(numbers);

  expect(output).toEqual(expected);
});
