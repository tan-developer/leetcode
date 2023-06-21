/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (c) {
  let result = 0;

  for (let i = 0; i < c.length; i++) {
    result += (c.charCodeAt(i) -64) * Math.pow(26 , c.length - (i+1))
  }
  return result
};

console.log(titleToNumber("YZ"));
