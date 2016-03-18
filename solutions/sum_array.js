function sumArray (array) {
  var max = array[0];
  for (var i = 0; i < array.length; i++) {
    var sum = array[i];
    for (var j = i + 1; j <= array.length; j++) {
      if (sum > max) max = sum;
      sum += array[j];
    }
  }
  return max;
};

// Sum Array

// Given an array of numbers, calculate the greatest contiguous sum of numbers in it. A single array item will count as a contiguous sum.

// Examples

// input: [ 1, 2, 3 ]
// output: 6

// input: [ 4, -1, 5 ]
// output: 8

// input: [ 10, -11, 11 ]
// output: 11

// input: [ 1, 2, 3, -6, 4, 5, 6 ]
// output: 15