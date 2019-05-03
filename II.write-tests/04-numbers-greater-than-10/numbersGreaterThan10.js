const largerThanTen = function(array) {
  return array.filter(number => {
    return number > 10;
  });
};

module.exports = largerThanTen;