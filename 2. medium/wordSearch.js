/*
https://leetcode.com/problems/word-search/

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell,
where "adjacent" cells are those horizontally or vertically neighboring.
The same letter cell may not be used more than once.

----------------------------------------------------

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
 
----------------------------------------------------

Constraints:

board and word consists only of lowercase and uppercase English letters.
1 <= board.length <= 200
1 <= board[i].length <= 200
1 <= word.length <= 10^3
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
    let found = false;
    
    const findWord = (R, C, B, idx = 0) => {
        if(!found && B[R][C] === word[idx]) {
            if (idx === word.length - 1) {
                found = true;
            } else {
                const temp = B[R][C];
                B[R][C] = '.';
                
                if (B[R + 1] && B[R + 1][C] === word[idx + 1]) {           
                    findWord(R + 1, C, B, idx + 1);
                }
                if (B[R - 1] && B[R - 1][C] === word[idx + 1]) {
                    findWord(R - 1, C, B, idx + 1);
                }
                if (B[R][C + 1] === word[idx + 1]) {
                    findWord(R, C + 1, B, idx + 1);
                }
                if (B[R][C - 1] === word[idx + 1]) {
                    findWord(R, C - 1, B, idx + 1);
                }
                B[R][C] = temp;    
            }
        }
    }
    
    for (let row = 0; row < board.length && !found; row += 1) {
        for (let col = 0; col < board[row].length && !found; col += 1) {
            if (board[row][col] === word[0]) {
                findWord(row, col, board);
            }
        }
    }
    
    return found;
};
