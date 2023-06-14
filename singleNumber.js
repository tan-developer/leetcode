var singleNumber = (nums) => {
  nums.sort((a, b) => a - b);

  const count = {};

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (count[element]) {
      count[element]++;
    } else {
      count[element] = 1;
    }
  }

  for (const key in count) {
    if(count[key] > nums.length / 2) {
      return Number(key)
    }
  }
};

console.log(singleNumber([2,2,1,1,1,2,2]))
