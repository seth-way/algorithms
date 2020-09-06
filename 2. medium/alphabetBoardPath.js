/*
https://leetcode.com/problems/alphabet-board-path/

On an alphabet board, we start at position (0, 0), corresponding to character board[0][0].

Here, board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"], as shown in the diagram below.

We may make the following moves:

'U' moves our position up one row, if the position exists on the board;
'D' moves our position down one row, if the position exists on the board;
'L' moves our position left one column, if the position exists on the board;
'R' moves our position right one column, if the position exists on the board;
'!' adds the character board[r][c] at our current position (r, c) to the answer.
(Here, the only positions that exist on the board are positions with letters on them.)

Return a sequence of moves that makes our answer equal to target in the minimum number of moves.
You may return any path that does so.

-------------------------------------

Example 1:

Input: target = "leet"
Output: "DDR!UURRR!!DDD!"

Example 2:

Input: target = "code"
Output: "RR!DDRR!UUL!R!"
*/

/**
 * @param {string} target
 * @return {string}
 */

const alphabetBoardPath = (target) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const rowColumnOf = (char) => {
    const index = alphabet.indexOf(char);
    return [Math.floor(index / 5), index % 5];
  };

  let currRow = 0;
  let currColumn = 0;
  let result = '';

  const moveLorR = (endingCol) => {
    if (currColumn > endingCol) {
      result += 'L'.repeat(currColumn - endingCol);
      currColumn = endingCol;
    } else if (currColumn < endingCol) {
      result += 'R'.repeat(endingCol - currColumn);
      currColumn = endingCol;
    }
  };

  const moveUorD = (endingRow) => {
    if (currRow > endingRow) {
      result += 'U'.repeat(currRow - endingRow);
      currRow = endingRow;
    } else if (currRow < endingRow) {
      result += 'D'.repeat(endingRow - currRow);
      currRow = endingRow;
    }
  };

  for (let i = 0; i < target.length; i += 1) {
    const [tarRow, tarColumn] = rowColumnOf(target[i]);

    if (currRow === 5) {
      moveUorD(tarRow);
      moveLorR(tarColumn);
    } else {
      moveLorR(tarColumn);
      moveUorD(tarRow);
    }

    result += '!';
  }

  return result;
};
