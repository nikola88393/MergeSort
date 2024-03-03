function merge(arrA, arrB) {
  let i = 0,
    j = 0;
  let arr = [];

  while (i < arrA.length && j < arrB.length) {
    if (arrA[i] < arrB[j]) {
      arr.push(arrA[i]);
      i++;
    } else {
      arr.push(arrB[j]);
      j++;
    }
  }

  while (i < arrA.length) {
    arr.push(arrA[i]);
    i++;
  }

  while (j < arrB.length) {
    arr.push(arrB[j]);
    j++;
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let leftHalf = arr.slice(0, Math.floor(arr.length / 2));
  let rightHalf = arr.slice(Math.floor(arr.length / 2));

  let leftHalfSorted = mergeSort(leftHalf);
  let rightHalfSorted = mergeSort(rightHalf);
  return merge(leftHalfSorted, rightHalfSorted);
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
