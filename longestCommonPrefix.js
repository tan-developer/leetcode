/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
    }
  }

  console.log(typeof(+'1'));
};
// prefix = strs[0] == flower
// 'flow'.indexOf(prefix) == 0 , flow
longestCommonPrefix(["flower", "flow", "flight"]);
