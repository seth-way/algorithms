/*
https://leetcode.com/problems/search-a-2d-matrix/submissions/

Write an efficient algorithm that searches for a value target
in an m x n integer matrix matrix.
This matrix has the following properties:
-
Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.

---------------------------------------------------------------------------

Example 1:
-
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
-
Example 2:
-
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

---------------------------------------------------------------------------

Constraints:
-
m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 const searchMatrix = (matrix, target) => {
    let maxIdx = matrix.length * matrix[0].length - 1;
    let targetIdx, row, idx;
    
    const getRowAndRowIdx = (idx) => {
        const row = Math.floor(idx / matrix[0].length);
        const rowIdx = idx % matrix[0].length;
        return [row, rowIdx];
    };
    
    // recursive function to conduct a binary search of
    // the matrix as though it was one long 1D array
    const search = (min, max) => {
        targetIdx =  Math.floor((max + min) / 2);
        [row, idx] = getRowAndRowIdx(targetIdx);

        if (matrix[row] && matrix[row][idx] === target) {
            return true;
        } else if (min >= max) {
            return false;
        } else if (matrix[row][idx] > target) {
            return search(min, targetIdx - 1);
        } else {
            return search(targetIdx + 1, max);
        } 
    };
    
    return search(0, maxIdx)
};
