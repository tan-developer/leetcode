/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let maxIndexRow = matrix[0].length;

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] < target) {
      for (let j = 0; j < maxIndexRow; j++) {
        if (matrix[i][j] > target) {
          maxIndexRow -= 1;
          break;
        }

        if (matrix[i][j] === target) {
          return true;
        }
      }
    } else if (matrix[i][0] === target) {
      return true;
    }else {
      break;
    }
  }
  return false
};

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    20
  )
);
