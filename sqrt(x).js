/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  // 12
  let tmp = x/2;
  console.log(tmp)

  // 6
  while(tmp * tmp > x){
      tmp--;
  }

  console.log(tmp)

  return tmp;
}

mySqrt(3)