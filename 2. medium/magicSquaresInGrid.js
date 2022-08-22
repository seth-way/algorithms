/*
https://leetcode.com/problems/magic-squares-in-grid/

Given a row x col grid of integers,
how many 3 x 3 "magic square" subgrids are there?
(Each subgrid is contiguous).

-----------------------------------------------------------------

Example 1:
-
Input: grid =
[[4,3,8,4],
 [9,5,1,9],
 [2,7,6,2]]
Output: 1
Explanation: 
The following subgrid is a 3 x 3 magic square:
[[4,3,8],
 [9,5,1],
 [2,7,6]]
while this one is not:
[[3,8,4],
 [5,1,9],
 [7,6,2]]
In total, there is only one magic square inside the given grid.
-
Example 2:
-
Input: grid = [[8]]
Output: 0

-----------------------------------------------------------------

Constraints:
-
row == grid.length
col == grid[i].length
1 <= row, col <= 10
0 <= grid[i][j] <= 15
-----------------------------------------------------------------

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 const numMagicSquaresInside = (grid) => {
    let result = 0;
    
    const valuesAreUnique = (row, col) => {
        let vals = new Set();
        
        for (let i = 0; i < 3; i += 1) {
            for (let j = 0; j < 3; j += 1) {
                if (grid[row + i][col + j] > 9) return false;
                if (grid[row + i][col + j] < 1) return false;
                
                vals.add(grid[row + i][col + j]);
            }
        }
        
        return vals.size === 9;
    };
    
    const validRowColDiag = (row, col) => {
        // check 1st row total
        if (grid[row].slice(col, col + 3).reduce(((a, b) => a + b), 0) !== 15) {
            return false;
        }
        // check 2nd row total
        // (no need to check 3rd if 1st 2 are valid)
        if (grid[row + 1].slice(col, col + 3).reduce(((a, b) => a + b), 0) !== 15) {
            return false;
        }
        // check top left to bottom right diagonal 
        if (grid[row][col] + grid[row + 1][col + 1] + grid[row + 2][col + 2] !== 15) {
            return false
        }
        // check top right to borrom left diagonal
        if (grid[row][col + 2] + grid[row + 1][col + 1] + grid[row + 2][col] !== 15) {
            return false;
        }
        // check first two column totals
        // (no need to check 3rd if 1st 2 are valid)
        let sum;
        for (let i = 0; i < 2; i += 1) {
            sum = 0;
            
            for (let j = 0; j < 3; j += 1) {
                sum += grid[row + j][col + i];
            }
            
            if (sum !== 15) return false;
        }
        
        return true;
    };
    
    for (let i = 0; i < grid.length - 2; i += 1) {
        for (let j = 0; j < grid[0].length - 2; j += 1) {
            if (valuesAreUnique(i, j) && validRowColDiag(i, j)) result += 1;
        }
    }
    
    return result;
};