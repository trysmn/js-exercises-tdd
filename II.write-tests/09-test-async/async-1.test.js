const getRepos = require("./async-1");

test("gets a list of repositories names", function() {
  // arrange
  const url = "https://api.github.com/users/kabaros/repos";
  // act
  getRepos(url).then(function(result) {
    // assert
    expect(result).toContain("js-exercises");
    expect(result).toContain("dom-ajax-repo");
  });
});
