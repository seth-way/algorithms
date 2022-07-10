/*
https://leetcode.com/problems/largest-magic-square/

A k x k magic square is a k x k grid filled with integers such that every row sum,
every column sum, and both diagonal sums are all equal.
The integers in the magic square do not have to be distinct.
Every 1 x 1 grid is trivially a magic square.
-
Given an m x n integer grid, return the size (i.e., the side length k)
of the largest magic square that can be found within this grid.

----------------------------------------------------------------------------

Example 1:
-
Input: grid =
[[7,1,4,5,6],
 [2,5,1,6,4],
 [1,5,4,3,2],
 [1,2,7,3,4]]
Output: 3
Explanation: The largest magic square has a size of 3.
[[5,1,6],
 [5,4,3],
 [2,7,3]]
Every row sum, column sum, and diagonal sum of this magic square is equal to 12.
- Row sums: 5+1+6 = 5+4+3 = 2+7+3 = 12
- Column sums: 5+5+2 = 1+4+7 = 6+3+3 = 12
- Diagonal sums: 5+4+3 = 6+4+2 = 12
-
Example 2:
-
Input: grid =
[[5,1,3,1],
 [9,3,3,1],
 [1,3,3,8]]
Output: 2
-
[[3,3],
 [3,3]]
----------------------------------------------------------------------------

Constraints:
-
m == grid.length
n == grid[i].length
1 <= m, n <= 50
1 <= grid[i][j] <= 106
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var largestMagicSquare = function(grid) {
    if (!grid.length) return 0;
    
    const testRows = (row, col, total, testSize) => {
        for (let i = 1; i < testSize; i += 1) {
            if (grid[row + i].slice(col, col + testSize).reduce((a, b) => (a + b), 0) !== total) {
                return false;
            }
        }
        
        return true;
    };
    
    const testCols = (row, col, total, testSize) => {
        let columnSums = Array(testSize).fill(0);

        for (let i = 0; i < testSize; i += 1) {
            for (let j = 0; j < testSize; j += 1) {
                columnSums[j] += grid[row + i][col + j];
            }
        }

        return columnSums.every(sum => sum === total);
    };
    
    const testDiags = (row, col, total, testSize) => {
        let sum1 = 0; let sum2 = 0;
        
        for (let i = 0; i < testSize; i += 1) {
            sum1 += grid[row + i][col + i];
            sum2 += grid[row + i][col + testSize - i - 1];
        }

        return sum1 === total && sum2 === total;
    };
    
    const testAll = (row, col, total, testSize) => (
        testRows(row, col, total, testSize) &&
        testCols(row, col, total, testSize) &&
        testDiags(row, col, total, testSize)
    );  
        
    let result = 1;
    
    // iterate through board
    for (let i = 0; i + result < grid.length; i += 1) {
        for (let j = 0; j + result < grid[0].length; j += 1) {
            // grow size of test square, starting with 1 size larger than current largest
            for (let k = result + 1; i + k <= grid.length && j + k <= grid[0].length; k += 1) {
                // use 1st row or square as reference total
                let total = grid[i].slice(j, j + k).reduce((a, b) => (a + b), 0);
                if (testAll(i, j, total, k)) result = k;
            }
        }
    }
    
    return result;
};
