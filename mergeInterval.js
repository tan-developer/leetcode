const merge = function (arr) {
  arr.sort(([a,_],[b , none]) => {
    return a-b
  });
  const result= []

  console.log(arr)
  
  for (let interval of arr) {

    if(result.length === 0 || result[result.length - 1][1] < interval[0] ) {
      result.push(interval)
    }else if(result[result.length - 1][1] <= interval[1]){
      result[result.length -1][1] = interval[1]
    }
  }
  console.log(result)
}



merge([[1,4],[2,3]])