function longestRun (string) {
  if (!string.length) return [0,0];
  var index = 0, high = 0, count = 0, start = 0;
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    if (char !== string[i-1]) {
      count = 1;
      start = i;
    } else {
      count++;
    }
    if (count > high) {
      high = count;
      index = start;
    }
  }
  return [index, index + high - 1];
}


// Longest Run

// Write a function that, given a input, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
// If there are two runs of equal length, return the first one. Return [0,0] for no runs.

// Examples

// input: "abbbcc" 
// output: [ 1, 3 ]

// input: "aabbc"
// output: [ 0, 1 ]

// input: ""
// output: [ 0, 0 ]

// input: "mississippi"
// output: [ 2, 3 ]

// input: "abcdefgh"
// output: [ 0, 0 ]