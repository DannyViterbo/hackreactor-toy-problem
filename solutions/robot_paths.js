function robotPaths (n) {

  var board = makeBoard(n);
  
  function move (x, y) {
    var count = 0;
    
    if (x === n - 1 && y === n - 1) {
      return 1;
    }
    board.togglePiece(x,y);
    if (board[x - 1] && board[x - 1][y] !== undefined && !board.hasBeenVisited(x - 1,y)) { //up
      count += move(x-1,y);
    }
    if (board[x + 1] && board[x + 1][y] !== undefined && !board.hasBeenVisited(x + 1,y)) { //down
      count += move(x+1,y);
    }
    if (board[x] && board[x][y - 1] !== undefined && !board.hasBeenVisited(x,y - 1)) { //left
      count += move(x,y - 1);
    }
    if (board[x] && board[x][y + 1] !== undefined && !board.hasBeenVisited(x,y + 1)) { //right
      count += move(x,y + 1);
    }

    board.togglePiece(x,y);
    return count;
  };

  return move(0,0);

};

// You've got Helpers! 

function makeBoard(n) {
  var board = []
  for (var i = 0; i < n; i++) {
    board.push([])
    for (var j = 0; j < n; j++) {
      board[i].push(false)
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j]
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j]
  }
  return board
};

// Robot Paths

// A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner. The robot can move either up, down, left, or right, but cannot visit the same spot twice. How many possible unique paths are there to the bottom right corner?

// Make your solution work for a grid of any size.

// Parameters:

// n (required) - amount of rows/columns (max 6)


// Examples

// input: 1
// output: 1

// input: 2
// output: 2

// input: 3
// output: 12