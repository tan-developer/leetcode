var sortColors = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }

  const pivot = nums[nums.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (pivot > nums[i]) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }


  return [...sortColors(left), pivot, ...sortColors(right)]
};

console.log(sortColors([2,0,2,1,1,0]))