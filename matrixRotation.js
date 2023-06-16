const matrixRotation = (m) => {
  let right = matrix.length - 1;
  let left = 0;
  let tmp;

  while (right > left) {
    for (let i = 0; i < right - left; i++) {
      let top = left;
      let bottom = right;
      // save the topLeft
      topLeft = m[top][left + i];
      // move bottomLeft to topLeft
      m[top][left + i] = m[bottom - i][left];

      // move bottomRight to bottomLeft
      m[bottom - i][left] = m[bottom][right - i];

      // move topRight to bottomRight
      m[bottom][right - i] = m[top + i][right];

      m[top + i][right] = topLeft;

      // The i idea is bc the motion of each corner element :
      // Example : topLeft have to move to the next which mean top[left + 1] === i
    }
    left++;
    right--;
  }
};

matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

matrixRotation(matrix);

console.log(matrix);
