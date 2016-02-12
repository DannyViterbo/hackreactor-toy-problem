function largestProductOfThree (array) {
  // Write your code here, and
  // return your final answer.
  var prodTwo = [];
  for (var i = 0; i < array.length-1; i++) {
    for (var j = i + 1; j < array.length; j++) {
      prodTwo.push(array[i] * (array[j]));
    }
  }
  var prodThree = array.reduce(function(a, b) {
    
  });
  return prodThree;
}

// Largest Product of Three
// Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

// Examples

// input: [ 2, 1, 3, 7 ]  
// output: 42

// input: [ 0, 2, 3 ] 
// output: 0