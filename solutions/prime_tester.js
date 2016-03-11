function primeTester (n) {
  // Write your code here, and
  // return your final answer.
  if (n === 1) { return false; }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

// Prime Tester

// A prime number is an integer greater than 1 that has no divisors other than itself and 1. Write a function that accepts a number and returns true if it’s a prime number, false if it’s not. The grader is looking at the efficiency of your solution (number of operations) as well as correctness! 

// Parameters:

// n (required) - a number.

// Examples

// input: 2
// output: true

// input: 1
// output: false