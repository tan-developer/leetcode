/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) {
    return 0;
  }
  const map = new Map();
  let result = 0;
  let resultArray = [];
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === undefined) {
      result += 1;
    } else {
      map.clear();
      resultArray.push(result);
      result = 1;

      if (s[i] !== s[i - 1]) {
        i--;
      }
    }

    if (i === s.length - 1) {
      resultArray.push(result);
    }

    map.set(s[i], i);
  }

  return Math.max(...resultArray);
};

console.log(lengthOfLongestSubstring("anviaj"));
