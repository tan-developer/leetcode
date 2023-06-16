/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort(([a, _], [b, __]) => a - b);
  let res = 0
  prevEnd = intervals[0][1]
  for(let i = 1 ; i < intervals.length ; i++) {
    [start , end] = intervals[i]
    if (start >= prevEnd) {
      prevEnd = end
    }else {
      res++;
      prevEnd = Math.min(end , prevEnd)
    }
  }    


  return res
};

console.log(
  eraseOverlapIntervals([
    [1, 100],
    [11, 22],
    [1, 11],
    [2, 12],
  ])
);
