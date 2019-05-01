const removeMiddle = require("./remove-middle");

test("Remove middle", function() {
  const words = ["mouse", "giraffe", "queen", "window", "bottle"];
  
  const expectedWords = ["mouse", "giraffe", "window", "bottle"];
  const expectedOutput = ["queen"];

  const output = removeMiddle(words);

  expect(output).toEqual(expectedOutput);
  expect(words).toEqual(expectedWords);
});
