/*
https://leetcode.com/problems/unique-paths-iii/

On a 2-dimensional grid, there are 4 types of squares:

1 represents the starting square.  There is exactly one starting square.
2 represents the ending square.  There is exactly one ending square.
0 represents empty squares we can walk over.
-1 represents obstacles that we cannot walk over.
Return the number of 4-directional walks from the starting square to the ending square,
that walk over every non-obstacle square exactly once.

---------------------------------------------------------------------------

Example 1:

Input: [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
Output: 2
Explanation:
    We have the following two paths: 
    1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
    2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)

Example 2:

Input: [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
Output: 4
Explanation:
    We have the following four paths: 
    1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
    2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
    3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
    4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)

Example 3:

Input: [[0,1],[2,0]]
Output: 0
Explanation: 
    There is no path that walks over every empty square exactly once.
    Note that the starting and ending square can be anywhere in the grid.
 
---------------------------------------------------------------------------

Note:

1 <= grid.length * grid[0].length <= 20
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const uniquePathsIII = (grid) => {           

    let numPaths = 0;
    let walkableSquares = 0;

    grid.forEach((row) => {
        row.forEach((val) => {
            if (val === 0 || val === 1) {
                walkableSquares += 1;
            }
        })
    })

    const findPath = (B, R, C, count) => {
        const val = B[R][C];
        
        if (val === 2 && count === walkableSquares) {
            numPaths += 1;
        } else if (val === 0 || val === 1) {
            count += 1;
            B[R][C] = -1;
            if (B[R + 1]) {
                findPath(B, R + 1, C, count);
            }
            if (B[R - 1]) {
                findPath(B, R - 1, C, count);
            }
            if (C + 1 < B[0].length) {
                findPath(B, R, C + 1, count);
            }
            if (C - 1 >= 0) {
                findPath(B, R, C - 1, count);
            }
            B[R][C] = val;
            count -= 1;
        }
    }
    
    for (let row = 0; row < grid.length; row += 1) {
        for (let col = 0; col < grid[row].length; col += 1) {
            if (grid[row][col] === 1) {
                findPath(grid, row, col, 0);
            }
        }
    }
    
    return numPaths;
};
