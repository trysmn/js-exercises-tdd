const average = require("./get-average");

test("Average", function() {
  const numbers = [4, "-", 8, 11, "hello", "57", 0, 2];
  const expected = 5;

  const output = average(numbers);

  expect(output).toEqual(expected);
});
