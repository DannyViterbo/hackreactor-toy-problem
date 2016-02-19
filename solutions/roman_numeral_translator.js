function translateRomanNumeral (romanNumeral) {
  romanNumeral = romanNumeral.toUpperCase();
  var result = 0;
  for (var i = romanNumeral.length - 1; i >= 0; i--) {
    var digit = romanNumeral[i], prev = romanNumeral[i + 1];
    if (!DIGIT_VALUES[digit]) return "null";
    if (DIGIT_VALUES[digit] < DIGIT_VALUES[prev]) {
      result -= DIGIT_VALUES[digit];
    } else {
      result += DIGIT_VALUES[romanNumeral[i]];
    }
  }
  return result;  
}

// Roman Numeral Translator

// Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

// When a smaller numeral appears before a larger one, it becomes a subtractive operation. You can assume only one smaller numeral may appear in front of larger one.

// You should return "null" on invalid input.

// You've got Helpers! 

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

// Examples

// input: "LX"
// output: 60

// input: "IV"
// output: 4

// input: "horse"
// output: "null"

// input: ""
// output: 0