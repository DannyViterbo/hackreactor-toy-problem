/*! toyProblem v0.0.0 - MIT license */
'use strict';

// var Tree = function(value){
//   this.value = value;
//   this.children = [];
// };

// Tree.prototype.DFSelect = function(filter, depth) { 
//   depth = depth || 0;
//   var ans = [];
//   if (filter(this.value, depth)) ans.push(this.value); 
//   for (var i = 0; i < this.children.length; i++) {
//     var node = this.children[i];
//     ans = ans.concat(node.DFSelect(filter, depth + 1));
//   }
//   return ans;
// };

// Tree.prototype.addChild = function(child){
//   if (!child || !(child instanceof Tree)){
//     child = new Tree(child);
//   }
//   if(!this.isDescendant(child)){
//     this.children.push(child);
//   }else {
//     throw new Error("That child is already a child of this tree");
//   }
//   // return the new child node for convenience
//   return child;
// };

// Tree.prototype.isDescendant = function(child){
//   if(this.children.indexOf(child) !== -1){
//     // `child` is an immediate child of this tree
//     return true;
//   }else{
//     for(var i = 0; i < this.children.length; i++){
//       if(this.children[i].isDescendant(child)){
//         // `child` is descendant of this tree
//         return true;
//       }
//     }
//     return false;
//   }
// };

// Tree.prototype.removeChild = function(child){
//   var index = this.children.indexOf(child);
//   if(index !== -1){
//     // remove the child
//     this.children.splice(index,1);
//   }else{
//     throw new Error("That node is not an immediate child of this tree");
//   }
// };

//------

// function largestProductOfThree (array) {
//   // Write your code here, and
//   // return your final answer.
//   var maxes = [];
//   for (var j = 1; j < array.length; j++) {
//     var cur = array[j], ind = j;   
//     var pair = array[ind - 1] * cur;
//     var threes = [];
//     for (var i = 0; i < array.length; i++) {
//       if (i === ind - 1 || i === ind) {
//         continue;
//       }
//       threes.push(pair * array[i]);
//     }
//     maxes.push(Math.max.apply(null, threes));
//   };
//   return Math.max.apply(null, maxes);
// };

//------

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

2 ".0...<br />.00..<br />....0"

3 "..000.<br />..000.<br />..000.<br />.0....<br />..000."

2 "..000.<br />..0...<br />..0.0.<br />..0...<br />..000."

5 "0...0<br />..0..<br />0...0"

5 "00...0<br />0...00<br />......<br />0.0.0.<br />0....."

"
00...0
0...00
......
0.0.0.
0.....
"

