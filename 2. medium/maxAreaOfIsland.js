/*
https://leetcode.com/problems/max-area-of-island/

Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land)
connected 4-directionally (horizontal or vertical.)
You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array.
(If there is no island, the maximum area is 0.)

----------------------------------------------------

Example 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]

Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.

Example 2:

[[0,0,0,0,0,0,0,0]]

Given the above grid, return 0.

Note: The length of each dimension in the given grid does not exceed 50.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = (grid) => {
    let maxArea = 0;

    const markIsland = (R, C, count) => {
        if(grid[R] && grid[R][C] && grid[R][C] === 1) {
            count += 1;
            if (count > maxArea) {
                maxArea = count;
            }
            grid[R][C] = 0;
            count = markIsland(R + 1, C, count);
            count = markIsland(R - 1, C, count);
            count = markIsland(R, C + 1, count);
            count = markIsland(R, C - 1, count);
        }
        return count;
    }

    for (let row = 0; row < grid.length; row += 1) {
        for (let col = 0; col < grid[row].length; col += 1) {
            if (grid[row][col] === 1) {
                markIsland(row, col, count = 0);
            }
        }
    }

    return maxArea;
};