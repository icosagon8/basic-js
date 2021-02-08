module.exports = function countCats(matrix) {
  let count = 0;

  matrix.forEach(item => {
    item.forEach(value => {
      if (value === '^^') {
        count++;
      }
    })
  })

  return count;
};