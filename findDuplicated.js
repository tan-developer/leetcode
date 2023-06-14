function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (pivot > arr[i]) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

function findDuplicate(arr) {
  const sorted = quickSort(arr);
  for (let i = 0; i <= sorted.length - 1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      return true;
    }
  }
  return false;
}
