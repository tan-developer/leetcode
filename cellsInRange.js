/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
  let max = Math.max(Number(s[1]), Number(s[4]));
  let min = Math.min(Number(s[1]), Number(s[4]));
  let start = s.charCodeAt(0) - 64;
  let end = s.charCodeAt(3) - 64;
  let result = []

  for (let i = start; i <= end; i++) {
      for (let j = min; j <= max; j++){
          result.push(`${String.fromCharCode(i+64)}${j}`)
      }
  }

  return result

}

cellsInRange("A1:F2")