function telephoneWords (digitString) { 
  var codes = {
    0: "0",
    1: "1",
    2: "ABC",
    3: "DEF",
    4: "GHI",
    5: "JKL",
    6: "MNO",
    7: "PQRS",
    8: "TUV",
    9: "WXYZ"
  };
  var result = [];
  function permute (digits, partial) {
    partial = partial || "";
    if (!digits) {
      result.push(partial);
      return;
    }
    var first = digits.substring(0,1),
        chars = codes[first];
    for (var i = 0; i < chars.length; i++) {
      var char = chars[i];
      permute(digits.substring(1), partial + char);
    }
  };
  permute(digitString);
  return result;
};


// Telephone Words

// Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

// Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!

// Write a function that takes up to four digits of a phone number, and returns a list of all of the words that can be written on the phone with that number. (You should return all permutations, not only English words.)

// Examples

// input: "0002" 
// output: [ "000A", "000B", "000C" ]

// input: "1123" 
// output: [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]