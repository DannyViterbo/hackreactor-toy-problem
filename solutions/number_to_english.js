function numberToEnglish (number) {
  var str = "" + number;
  if (numbersToWords[str]) {
    return numbersToWords[str];
  }
  var ans = [];
  var first = str.substring(0,str.length % 3);
  var rest = str.substring(str.length % 3);
  var arr = rest.match(/.{1,3}/g) || [];
  if (first.length) {
    arr.unshift(first);
  }
  var count = 1;
  for (var i = arr.length - 1; i >= 0; i--) {
    var tri = arr[i], temp = "";
    while (tri.length < 3) {
      tri = "x" + tri;
    }
    if (numbersToWords[tri[1]+tri[2]]) {
      temp += numbersToWords[tri[1]+tri[2]];
    } else if (tri[1] === "0") {
      if (tri[2] !== "0") temp += numbersToWords[tri[2]];
    } else if (numbersToWords[tri[1]+"0"]) {
      temp = temp + numbersToWords[tri[1]+"0"] + "-" + numbersToWords[tri[2]];
    } else {
      temp += numbersToWords[tri[2]];
    }
    if (numbersToWords[tri[0]] && tri[0] !== "0") {
      temp = numbersToWords[tri[0]] + " hundred " + temp;
      if (temp[temp.length - 1] === " ") temp = temp.substring(0,temp.length - 1);
    }
    if (numbersToPlace[count]) {
      if (numbersToPlace[count/1000] && numbersToPlace[count/1000] === ans[0]) {
        ans.shift();
      }
      ans.unshift(numbersToPlace[count]);
    }
    if (temp) ans.unshift(temp);
    count *= 1000;
  }
  return ans.join(" ");
};

// You've got Helpers! 

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};


// Number to English

// Write a function numberToEnglish, it should take a number and return the number as a string using English words.

// Examples

// input: 7
// output: "seven"

// input: 575
// output: "five hundred seventy-five"

// input: 78193512
// output: "seventy-eight million one hundred ninety-three thousand five hundred twelve"