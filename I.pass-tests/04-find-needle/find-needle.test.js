const findIndexOfElement = require("./find-needle");

test("Find the needle", function() {
  const words = ["house", "train", "slide", "needle", "book"];
  const expected = 3;

  const output = findIndexOfElement(words, "needle");
  expect(output).toEqual(expected);
});

test("Find the plant", function() {
  const words = ["plant", "shelf", "arrow", "bird"];
  const expected = 0;

  const output = findIndexOfElement(words, "plant");
  expect(output).toEqual(expected);
});
