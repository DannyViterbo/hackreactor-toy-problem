function rockPaperPermutation (roundCount) {
  var rps = "rps";
  var used = {};
  var target = Math.pow(3, roundCount);
  if (!roundCount) return [];
  while (Object.keys(used).length !== target) {
    var newPerm = "";
    for (var i = 0; i < roundCount; i++) {
      newPerm += rps[Math.floor(Math.random() * 3)];
    }
    used[newPerm] = newPerm;
  }
  return Object.keys(used).sort(function (a, b) {
    var x = a[0], y = b[0], i = 0;
    while (a !== undefined && a[i] === b[i]) {
      i++;
      x = a[i];
      y = b[i];
    }
    if (x === "r" || y === "s") {
      return -1;
    } else if (x === "s" || y === "r") {
      return 1;
    } else {
      return 0;
    }
  });
}

// Rock Paper Permutation

// Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.

// Examples

// input: 1
// output: [ "r", "p", "s" ]

// input: 2
// output: [ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]

// input: 0
// output: [ ]