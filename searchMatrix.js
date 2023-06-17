/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix == null || matrix.length < 1 || matrix[0].length < 1) {
    return false;
  }
  col = matrix[0].length - 1;
  row = 0;
  while (col >= 0 && row <= matrix.length - 1) {
    if (target == matrix[row][col]) {
      return true;
    } else if (target < matrix[row][col]) {
      col--;
    } else if (target > matrix[row][col]) {
      row++;
    }
  }
  return false;
};

console.log(searchMatrix([[-5], [-10]], -5));
