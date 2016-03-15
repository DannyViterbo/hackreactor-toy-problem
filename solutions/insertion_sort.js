function insertionSort (array) {
  var sorted = [];
  top: 
  for (var i = 0; i < array.length; i++) {
    var found = false;
    if (!sorted.length) {
      sorted.unshift(array[i]);
      continue top;
    }
    for (var j = 0; j < sorted.length; j++) {
      if (array[i] < sorted[j]) {
        sorted.splice(j,0,array[i]);
        found = true;
        continue top;
      } 
    }
    if (!found) sorted.push(array[i]);
  }
  return sorted;
}

// Insertion Sort

// Insertion sort is a basic sorting algorithm.

// Insertion sort iterates over an array, growing a sorted array behind the current location. It takes each element from the input and finds the spot, up to the current point, where that element belongs (in constant space). It does this until it gets to the end of the array.

// Insertion sort should be implemented as a stable sort. This means that equal elements
// should retain their relative order. Numbers, as primitives, give us no way to check this,
// so we’ll be sorting objects with a value field, on which they will be sorted, like so:

// [{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]

// A stable sort must return {value: 5, order: 1}, {value:5, order: 2} in that order.

// EXTRA CREDIT:

// Refactor your sort to (optionally) take an explicit comparator function as its second argument, so that callers can define arbitrary ways to sort elements. See Array.prototype.sort for an example of how this works (excerpt below):

// If comparator(a, b) is less than 0, sort a to a lower index than b, i.e. a comes first.
// If comparator(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements.
// If comparator(a, b) is greater than 0, sort b to a lower index than a.

// If no comparator is given, just sort the elements using < or >.

// Examples

// input: [ 3, 1, 2 ]
// output: [ 1, 2, 3 ]

// input: [ 1, 0, 100, 42 ]
// output: [ 0, 1, 42, 100 ]