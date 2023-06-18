/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length -1; i++) {
      let j = 1
      console.log(nums[i])

      while (j <= k) {
          if (nums[i] === nums[i + j]) {
              return true;
          }else if(nums[i] === undefined){
            j=k;
          }
          j++;
      }
  }
  return false;
};


console.log(containsNearbyDuplicate([2,2], 4))