/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let tmp = nums[0];
  let result = nums[0];

  for (var i = 1; i < nums.length; i++) {
    tmp = Math.max(nums[i] + tmp, nums[i]);
    result = Math.max(result, tmp);
  }

  return result;
};
