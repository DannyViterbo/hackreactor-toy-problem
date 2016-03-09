function evenOccurrence (arr) {
  var count = {};
  for (var i = 0; i < arr.length; i++) {
    if (!count[arr[i]]) count[arr[i]] = 0;
    count[arr[i]]++;
  };
  for (var i = 0; i < arr.length; i++) {
    if (count[arr[i]] % 2 === 0) {
      return arr[i];
    }
  };
  return null;
};

// Even Occurrence

// Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

// Examples

// input: [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]
// output: 2

// input: [ "cat", "dog", "dig", "cat" ]
// output: "cat"