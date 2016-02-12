function countIslands (mapStr) {
  // Write your code here, and
  // return your final answer.
  var mapArr = mapStr.split('\n');
  var mapWidth = mapArr[0].length;
  mapStr = mapArr.join('');
  var islands = {};
  var islandCount = 0;
  
  var findIsland = function(islandIndex) {
    if (mapStr[islandIndex] === '0') {
      islands[islandIndex] = true;
      if (islandIndex % mapWidth !== 0 && mapStr[islandIndex - 1] === '0' && !islands[islandIndex - 1]) {
        findIsland(islandIndex - 1);
      }
      if (islandIndex + 1 % mapWidth !== 0 && mapStr[islandIndex + 1] === '0' && !islands[islandIndex + 1]) {
        findIsland(islandIndex + 1);
      }
      if (mapStr[islandIndex - mapWidth] === '0' && !islands[islandIndex - mapWidth]) {
        findIsland(islandIndex - mapWidth);
      }
      if (mapStr[islandIndex + mapWidth] === '0') {
        findIsland(islandIndex + mapWidth);
      }
    }
  };
  
  for (var i = 0; i < mapStr.length; i++) {
    if (mapStr[i] === '0' && !islands[i]) {
      islandCount++;
      findIsland(i);
    }
  }
  return islandCount;
}

// Island Count
// Given a string representation of a 2d map, return the number of islands in the map. 
// Land spaces are denoted by a zero, while water is denoted by a dot. 
// Two land spaces are considered connected if they are adjacent (but not diagonal).

// Examples:
// ".0...\n.00..\n....0" output: 2

// "..000.\n..000.\n..000.\n.0....\n..000." output: 3

// "..000.\n..0...\n..0.0.\n..0...\n..000." output: 2

// "0...0\n..0..\n0...0" output: 5

// "00...0\n0...00\n......\n0.0.0.\n0....." output: 5
