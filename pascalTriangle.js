/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const result = [];

  for (let i = 0; i <= rowIndex; i++) {
    result.push((fac(rowIndex) / (fac(rowIndex - i) * fac(i))))
  }

  return result
};

function fac(num) {
  if (num < 0) {
    return -1;
  }

  if (num === 0) {
    return 1;
  }

  return num * fac(num - 1);
}

console.log(getRow(33));
