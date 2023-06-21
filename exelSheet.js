/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let str = "";
  while (columnNumber > 0) {
    columnNumber--;
    let code = columnNumber % 26;
    str += String.fromCharCode(code + 65);
    columnNumber = (columnNumber - code) / 26;
  }
  return str.split("").reverse().join("");
};

console.log(convertToTitle(28));
