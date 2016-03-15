function characterFrequency (string) {
  var index = {};
  var result = [];
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    if (index[char] === undefined) {
      index[char] = result.length;
      result.push([char,1])
    } else {
      result[index[char]][1]++;
    }
  }
  return result.sort(function (a, b) {
    if (a[1] < b[1]) {
      return 1;
    } else if (a[1] > b[1]) {
      return -1;
    } else {
      if (a[0] < b[0]) {
        return -1;
      } else if (a[0] > b[0]) {
        return 1;
      } else {
        return 0;
      }
    }
  });
};

// Character Frequency

// Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

// Examples

// input: "aaabbc"
// output: [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

// input: "mississippi"
// output: [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

// input: "" 
// output: [ ]