function primeTester (n) {
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


function primeSieve (start, end) {
  var store = {};
  function markMultiples(num) {
    var mul = 2;
    while (mul*num <= end) { 
     store[mul*num] = true;
     mul++;
    }
  }
  for (var i = 2; i <= end; i++) {
    if (!store[i]) {
      markMultiples(i);
    }
  }
  var primes = [];
  for (var j = start; j <= end; j++) {
    if (j < 2) continue;
    if (!store[j]) {
      primes.push(j)
    }
  }
  return primes;
};

// Extra credit:

// Write a function that generates a list of all prime numbers in a user-specified range (inclusive). If you're not quite sure where to start, check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling saucy, check out the Sieve of Atkin.) 

// Parameters:

// start > begin of range

// end > end of range (inlcusive)

// Examples

// start: 20
// end: 22
// output: [ ]

// start: 1
// end: 2
// output: [ 2 ]

// start: 16
// end: 20
// output: [ 17, 19 ]