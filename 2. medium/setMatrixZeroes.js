/*
https://leetcode.com/problems/set-matrix-zeroes/

Given an m x n integer matrix matrix, if an element is 0,
set its entire row and column to 0's.
-
You must do it in place.

----------------------------------------------------------------------------

Example 1:
-
Input:
matrix =
[[1,1,1],
 [1,0,1],
 [1,1,1]]
Output:
[[1,0,1],
 [0,0,0],
[1,0,1]]
-
Example 2:
-
Input:
matrix =
[[0,1,2,0],
 [3,4,5,2],
 [1,3,1,5]]
Output:
[[0,0,0,0],
 [0,4,5,0],
 [0,3,1,0]]

----------------------------------------------------------------------------

Constraints:
-
m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 const setZeroes = (matrix) => {
    const updateZeroes = (row, col, rowDiff, colDiff) => {
        if (matrix[row][col] !== 0) matrix[row][col] = '_';
        if (matrix[row + rowDiff] && matrix[row + rowDiff][col + colDiff] !== undefined) {
            updateZeroes(row + rowDiff, col + colDiff, rowDiff, colDiff)
        }
    };
    
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    for (let i = 0; i < matrix.length; i += 1) {
        for (let j = 0; j < matrix[0].length; j += 1) {
            if (matrix[i][j] === 0) {
                directions.forEach(dir => {
                    updateZeroes(i, j, dir[0], dir[1]);
                });
            }
        }
    }
    
    matrix.forEach(row => { 
        row.forEach((val, idx) => {
            if (val === '_') row[idx] = 0;
        });
    });
    
    return matrix;
};
