function fractionConverter (number) {
  var numerator = number, denominator = 1;
  while (numerator % 1 !== 0) {
    denominator++;
    numerator = (number * denominator).toFixed(6);
    if (denominator === 1000000) {
      debugger;
    }
  }
  return Math.round(numerator) + "/" + Math.abs(denominator);
}

// Fraction Converter

// Write a function that takes a number as its argument and returns a string that represents that number’s simplified fraction.
// Whole numbers and mixed fractions should be returned as improper fractions.

// Examples

// input: 0.5
// output: "1/2"

// input: 3
// output: "3/1"

// input: 2.5
// output: "5/2"

// input: 2.75
// output: "11/4"