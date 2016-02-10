/*! toyProblem v0.0.0 - MIT license */
'use strict';

// function rotatedArraySearch (rotated, target) {
//   // Write your code here, and
//   // return your final answer.
//   if (rotated.length === 1) {
//     return rotated[0] === target ? 0 : -1;
//   }
//   var middle = Math.floor(rotated.length / 2);
//   if (rotated[middle]) {
//     return middle;
//   } else if (target < rotated[middle]) {
//     return binarySearch(rotated.slice(0,middle), target);
//   } else if (target > rotated[middle]) {
//     var next = binarySearch(rotated.slice(middle + 1), target) 
//     if (next === - 1) {
//       return -1;
//     } else {
//       return next + middle + 1;
//     }
//   } else {
//     return - 1;
//   }
// }
