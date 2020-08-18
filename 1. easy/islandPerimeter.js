// https://leetcode.com/problems/island-perimeter/

/*
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally).
The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes" (water inside that isn't connected to the water around the island).
One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100.
Determine the perimeter of the island.

---------------------------------

Example:

Input:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Output: 16
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */

const islandPerimeter = (grid) => {
    let totalPerimeter = 0;
    
    const checkSquare = (row, column) => {
        if(!grid[row] || !grid[row][column]) {
            totalPerimeter += 1
        } else if (grid[row][column] === 1) {
            grid[row][column] = -1;
            checkSquare(row + 1, column);
            checkSquare(row - 1, column);
            checkSquare(row, column + 1);
            checkSquare(row, column - 1);
            
        } 
    }
    
    for (let i = 0; i < grid.length; i += 1) {
        for(let j = 0; j < grid[0].length; j += 1) {
            if (grid[i][j] === 1) {
                checkSquare(i, j);
                return totalPerimeter;
            }
        }
    }
};