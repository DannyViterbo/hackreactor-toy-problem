function rotatedArraySearch (rotated, target) {
  // Write your code here, and
  // return your final answer.
  var left = 0, right = rotated.length - 1;

  if (rotated.length === 1) {
    return rotated[0] === target ? 0 : -1;
  }
  while (left <= right) {
    var middle = Math.floor( (right + left) / 2 );

    if (rotated[middle] === target) {
      return middle;
    } else if (rotated[left] <= rotated[middle]) {
      if (rotated[left] <= target && target < rotated[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      if (rotated[middle] < target && target <= rotated[right]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
  return - 1;
};

// Rotated Array Search
// If you have a sorted array, a rotated version of that array is the sorted array rotated some number of times left or right. For example, a rotated version of [0, 1, 2, 3, 4] is [3, 4, 0, 1, 2] (rotated right twice). Each rotated array has a single pivot point where the groups of values to the left and right are sorted, but the sorting does not continue accross the pivot.

// Given a rotated, sorted array, your task is to efficiently find the index of an element within that array. Your time complexity goal is O( log(n) ), where ‘n’ is the number of elements in the array. For simplicity, you can assume that there are no duplicate elements in the array.

// Examples

// rotated: [ 4, 5, 6, 0, 1, 2, 3 ]
// target: 2 
// expected output: 5

// rotated: [ 4, 5, 6, 0, 1, 2, 3 ]
// target: 100
// expected output: -1