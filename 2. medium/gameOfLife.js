/*
https://leetcode.com/problems/game-of-life/

According to Wikipedia's article:
"The Game of Life, also known simply as Life,
is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
-
The board is made up of an m x n grid of cells,
where each cell has an initial state:
live (represented by a 1) or dead (represented by a 0).
Each cell interacts with its eight neighbors (horizontal, vertical, diagonal)
using the following four rules (taken from the above Wikipedia article):
-
Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules
simultaneously to every cell in the current state,
where births and deaths occur simultaneously.
Given the current state of the m x n grid board, return the next state.

-----------------------------------------------------------------------------------------

Example 1:
-
Input: board =
[[0,1,0],
 [0,0,1],
 [1,1,1],
 [0,0,0]]
Output:
[[0,0,0],
 [1,0,1],
 [0,1,1],
 [0,1,0]]
-
Example 2:
-
Input: board =
[[1,1],
 [1,0]]
Output:
[[1,1],
 [1,1]]

-----------------------------------------------------------------------------------------

Constraints:
-
m == board.length
n == board[i].length
1 <= m, n <= 25
board[i][j] is 0 or 1.
*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 const gameOfLife = (board) => {
    // helper matrix will hold total neighbors for any given row, col idx
    const helperMatrix = Array(board.length).fill().map(
        () => Array(board[0].length).fill()
    );
    // helper function gets total living neighbors
    const getNeighborTotal = (row, col) => {
        let total = 0;
        
        if (board[row - 1]) {
            if (board[row - 1][col - 1] !== undefined) {
                total += board[row - 1][col - 1];
            }
            
            total += board[row - 1][col];
            
            if (board[row - 1][col + 1] !== undefined) {
                total += board[row - 1][col + 1];
            }
        }
        
        if (board[row][col - 1] !== undefined) {
                total += board[row][col - 1];
        }
            
        if (board[row][col + 1] !== undefined) {
                total += board[row][col + 1];
        }
        
        if (board[row + 1]) {
            if (board[row + 1][col - 1] !== undefined) {
                total += board[row + 1][col - 1];
            }
            
            total += board[row + 1][col];
            
            if (board[row + 1][col + 1] !== undefined) {
                total += board[row + 1][col + 1];
            }
        }
        
        return total;
    };
    
    helperMatrix.forEach((row, rowIdx) => {
        row.forEach((val, colIdx) => {
            row[colIdx] = getNeighborTotal(rowIdx, colIdx);
        });
    });
    
    const decideIfLiving = (original, neighborTotal) => {
        let result = original;
        
        if (original) {
            if (neighborTotal < 2) result = 0;
            if (neighborTotal > 3) result = 0;
        } else {
            if (neighborTotal === 3) result = 1;
        }
        
        return result;
    }
    
    board.forEach((row, rowIdx) => {
        row.forEach((val, colIdx) => {
            board[rowIdx][colIdx] = decideIfLiving(val, helperMatrix[rowIdx][colIdx]);
        })
    });
};
