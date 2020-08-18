/*
https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/

Tic-tac-toe is played by two players A and B on a 3 x 3 grid.

Here are the rules of Tic-Tac-Toe:

Players take turns placing characters into empty squares (" ").
The first player A always places "X" characters,
while the second player B always places "O" characters.
"X" and "O" characters are always placed into empty squares, never on filled ones.
The game ends when there are 3 of the same (non-empty) character
filling any row, column, or diagonal.
The game also ends if all squares are non-empty.
No more moves can be played if the game is over.
Given an array moves where each element is another array of size 2
corresponding to the row and column of the grid where they mark their respective character
in the order in which A and B play.

Return the winner of the game if it exists (A or B),
in case the game ends in a draw return "Draw",
if there are still movements to play return "Pending".

You can assume that moves is valid (It follows the rules of Tic-Tac-Toe),
the grid is initially empty and A will play first.

--------------------------------------------------------

Example 1:

Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
Output: "A"
Explanation: "A" wins, he always plays first.
"X  "    "X  "    "X  "    "X  "    "X  "
"   " -> "   " -> " X " -> " X " -> " X "
"   "    "O  "    "O  "    "OO "    "OOX"

Example 2:

Input: moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]
Output: "B"
Explanation: "B" wins.
"X  "    "X  "    "XX "    "XXO"    "XXO"    "XXO"
"   " -> " O " -> " O " -> " O " -> "XO " -> "XO "
"   "    "   "    "   "    "   "    "   "    "O  "

Example 3:

Input: moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]
Output: "Draw"
Explanation: The game ends in a draw since there are no moves to make.
"XXO"
"OOX"
"XOX"

Example 4:

Input: moves = [[0,0],[1,1]]
Output: "Pending"
Explanation: The game has not finished yet.
"X  "
" O "
"   "
*/

/**
 * @param {number[][]} moves
 * @return {string}
 */

const tictactoe = (moves) => {
  const grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  let player = 1;

  const markGrid = (row, column, whosTurn) => {
    grid[row][column] = whosTurn;
  };

  for (let i = 0; i < moves.length; i += 1) {
    markGrid(moves[i][0], moves[i][1], player);
    player *= -1;
  }

  const diag1 = grid[0][0] + grid[1][1] + grid[2][2];
  const diag2 = grid[2][0] + grid[1][1] + grid[0][2];

  if (diag1 === 3 || diag2 === 3) {
    return 'A';
  }

  if (diag1 === -3 || diag2 === -3) {
    return 'B';
  }

  for (let i = 0; i < grid.length; i += 1) {
    const rowSum = grid[i].reduce((acc, val) => (acc + val), 0);

    if (rowSum === 3) {
      return 'A';
    }
    if (rowSum === -3) {
      return 'B';
    }

    let colSum = 0;

    grid.forEach((row) => {
      colSum += row[i];
    });

    if (colSum === 3) {
      return 'A';
    }
    if (colSum === -3) {
      return 'B';
    }
  }

  return moves.length === 9 ? 'Draw' : 'Pending';
};
