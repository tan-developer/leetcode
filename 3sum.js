function threeSum(array) {
  array.sort((a, b) => a - b);
  const result = [];
  //[ -4, -1, -1, 0, 1, 2 ]
  for (let i = 0; i < array.length - 2; i++) {
    let l = i + 1;
    let r = array.length - 1;

    while (l < r) {
      if (array[i] + array[l] + array[r] === 0) {
        result.push([array[i], array[l], array[r]]);

        while(array[l]===array[l+1]){
          l++;
        }
        l++
      } else if (array[i] + array[l] + array[r] > 0) {
        r--;
      } else {
        l++;
      }
    }

    while (array[i] === array[i + 1]) {
      i++;
    }
  }

  console.log(result);
}

threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]);
