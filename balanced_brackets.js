function isBalanced (str) {
  var expected = []; 
  var ends = [')',']','}'];
  var pairs = { '(': ')', '[': ']', '{': '}' };
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    if ( pairs.hasOwnProperty(letter) ) {
      expected.push(pairs[letter]);
    } else if ( ends.indexOf(letter) !== -1 ) {
      if (expected.pop() === letter) {
        continue;
      } else {
        return false;
      }
    }
  }
  console.log(expected);
  return expected.length === 0;
};


// Balanced Brackets

// Given a string, return true if it contains all balanced parenthesis (), curly-brackets {}, and square-brackets [].

// Examples

// input: "(x + y) - (4)" 
// output: true

// input: "(x + y) - (4)"
// output: true

// input: "(((10 ) ()) ((?)(:)))"
// output: true

// input: "[{()}]"
// output: true

// input: "(50)("
// output: false
