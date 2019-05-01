const secondLargest = require("./second-largest");

test("Second largest", function() {
  const numbers = [2, 0, 23, 0, 57, 1, 230];

  const output = secondLargest(numbers);

  expect(output).toEqual(57);
});
