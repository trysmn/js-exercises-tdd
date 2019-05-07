const getRepos = require("./async-2");
const fetcher = require("./fetcher");
jest.mock("./fetcher");

test("gets a list of repositories names (with mock)", function() {
  // arrange
  fetcher.mockResolvedValue([{ name: "js-exercises" }]);
  const url = "https://api.github.com/users/kabaros/repos";

  // act
  return getRepos(url).then(function(result) {
    // assert
    expect(result).toContain("js-exercises");
  });
});

test("gets a list of repositories names (without mock)", function() {
  // Arrange
  const url = "https://api.github.com/users/kabaros/repos";

  // Act 
  return getRepos(url).then(function(result) {
    // Assert
    expect(result).toContain("js-exercises");
  });
});
