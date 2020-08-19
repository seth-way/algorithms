/*
https://leetcode.com/problems/valid-sudoku/

Determine if a 9x9 Sudoku board is valid.
Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

------------------------------------------

Example 1:

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true

Example 2:

Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being 
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9.
Accepted
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */

const isValidSudoku = (board) => {
    // create an array containing string digits 1 - 9
    const digits = board.map((row, index) => ((index + 1).toString()));

    // write 3 separate functions to look for duplicates
    // in a given row, column, or subGrid
    const checkRow = (index) => {
        let result = true;

        digits.forEach((digit) => {
            if (board[index].indexOf(digit) !== board[index].lastIndexOf(digit)) {
                result = false;
            }
        });
        
        return result;
    }

    const checkColumn = (index) => {
        let result = true;
        // create a new array for all chars from each row at
        // the current index
        const column = board.map((row) => (row[index]));

        digits.forEach((digit) => {
            if (column.indexOf(digit) !== column.lastIndexOf(digit)) {
                result = false;
            }
        });

        return result;
    }

    const checkSubGrid = (index) => {
        // convert index to one of 9 subGrids in which
        // duplicates are not allowed
        const startRow = Math.floor((index) / 3) * 3;
        const startColumn = ((index) % 3) * 3;

        let subGrid = [];

        // fill subGrid array with 9 values from current subGrid
        for (let row = startRow; row < startRow + 3; row += 1) {
            subGrid = subGrid.concat(board[row].slice(startColumn, startColumn + 3));
        }

        let result = true;

        digits.forEach((digit) => {
            if (subGrid.indexOf(digit) !== subGrid.lastIndexOf(digit)) {
                result = false;
            }
        });

        return result;
    }

    for (let i = 0; i < board.length; i += 1) {
        if (!checkRow(i) || !checkColumn(i) || !checkSubGrid(i)) {
            return false;
        }
    }

    return true;
};