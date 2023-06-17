var increasingTriplet = function (nums) {
  let firstNum = Infinity
  let second = Infinity

  for(let i =0;i<nums.length ;i++){
      if(second < nums[i]) {
          return true
      }

      if (firstNum < nums[i]) {
          second = Math.min(nums[i] ,second)
      }

      firstNum = Math.min(nums[i] , firstNum)
  }

  return false
};