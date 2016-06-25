function arrayception (array, sum) {
  sum = sum || 0;
  var count, max = 0;
  for (var i = 0; i < array.length; i++) {
    count = 1 + sum;
    if (Array.isArray(array[i])) {
      count = arrayception(array[i], count);
    } 
    if (count > max) max = count;
  }
  return max;
}

// Arrayception
// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.

// Examples

// input: [ [ 5 ], [ [ ] ] ]
// output: 2

// input: [ 10, 20, 30, 40 ]
// output: 1

// input: [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]
// output: 4

// input: [ ]
// output: 0

// input: [ [ [ ] ] ]
// output: 0