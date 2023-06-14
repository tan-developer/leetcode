function quickSort(array){
  if(array.length <= 1) {
    return array
  }

  const pivot = array[array.length - 1];
  const leftArr = [];
  const rightArr = [];


  // Divine array into 2 array => leftArr : contains number < than pivot ; leftArr : contains number >= pivot
  for (let i = 0; i < array.length - 1; i++) {
    if(pivot > array[i]){
      leftArr.push(array[i])
    }else {
      rightArr.push(array[i])
    }
  }


  return [...quickSort(leftArr) , pivot , ...quickSort(rightArr)]
}


console.log(quickSort([5, 2, 6, 3, 1, 4]))
