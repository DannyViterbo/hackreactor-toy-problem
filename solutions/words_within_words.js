function nestedWordCount (wordList) {
  var max = 0, count, winner;
  for (var i = 0; i < wordList.length; i++) {
    var word = wordList[i], newList = wordList.slice();
    newList.splice(i,1);
    count = 0;
    for (var j = 0; j < newList.length; j++) {
      if (word.includes(newList[j])) {
        count++
      }
      if (count > max) {
        max = count;
        winner = word;
      }
    } 
  }
  return winner;
};

// Words within Words

// Given an array of unique words, find the word that contains the greatest number of other words. A word must be at least two letters long. For an added challenge, try for O(n).

// Examples
// input: [ "gray", "grays", "ray", "rays", "strays" ]
// output: "grays"