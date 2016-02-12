function firstNonRepeatedCharacter (string) {
  // Write your code here, and
  // return your final answer.
  var arr = string.split("");
  var ans = "sorry";
  for (var i = 0; i < arr.length; i++) {
    var copy = arr.slice();
    copy.splice(i,1);
    if (copy.indexOf(arr[i]) === -1) {
      ans = arr[i];
      break;
    }
  }
  return ans;
}

// Non-repeated Character
// Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'.

// Examples
// input: "ABCDBIRDUP"
// output: "A"

// input: "XXXXXXX"
// output: "sorry"

// input: "ALAMABA"
// output: "L"

// input: "BABA"
// output: "sorry"