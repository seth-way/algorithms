/*
https://leetcode.com/problems/matrix-block-sum/

Given a m * n matrix mat and an integer K,
return a matrix answer where each answer[i][j]
is the sum of all elements mat[r][c]
for i - K <= r <= i + K, j - K <= c <= j + K,
and (r, c) is a valid position in the matrix.

----------------------------------------------------

Example 1:

Input:
mat = 
    [[1,2,3],
     [4,5,6],
     [7,8,9]],
K = 1
Output:
    [[12,21,16],
     [27,45,33],
     [24,39,28]]

Example 2:

Input: mat =
    [[1,2,3],
     [4,5,6],
     [7,8,9]],
K = 2
Output:
    [[45,45,45],
     [45,45,45],
     [45,45,45]]

----------------------------------------------------

Constraints:

m == mat.length
n == mat[i].length
1 <= m, n, K <= 100
1 <= mat[i][j] <= 100
*/

/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
const matrixBlockSum = (mat, K) => {
    const getBlockSum = (row, col) => {
        const rowStart = row - K >= 0 ? row - K : 0;
        const rowFinish = row + K < mat.length ? row + K : mat.length - 1;
        const colStart = col - K >= 0 ? col - K : 0;
        const colFinish = col + K < mat[row].length ? col + K : mat[row].length - 1;
        let sum = 0;
        
        for (let i = rowStart; i <= rowFinish; i += 1) {
            for (let j = colStart; j <= colFinish; j += 1) {
                sum += mat[i][j];
            }
        }
        
        return sum;
    }
    
    return mat.map((row, rowIdx) => (
        row.map((col, colIdx) => (
            getBlockSum(rowIdx, colIdx)
        ))
    ));
};
