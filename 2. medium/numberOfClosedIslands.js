/*
https://leetcode.com/problems/number-of-closed-islands/

Given a 2D grid consists of 0s (land) and 1s (water). 
An island is a maximal 4-directionally connected group of 0s
and a closed island is an island totally (all left, top, right, bottom)
surrounded by 1s.

Return the number of closed islands.

-----------------------------------------------------------

Example 1:

Input: grid =
 
    [[1,1,1,1,1,1,1,0]
     [1,0,0,0,0,1,1,0],
     [1,0,1,0,1,1,1,0],
     [1,0,0,0,0,1,0,1],
     [1,1,1,1,1,1,1,0]]

Output: 2

Explanation: 
    Islands starting at [1, 1] and [3, 6] are closed because
    they are completely surrounded by water (group of 1s).

Example 2:

Input: grid =
    
    [[0,0,1,0,0],
     [0,1,0,1,0],
     [0,1,1,1,0]]

Output: 1

Example 3:

Input: grid = 

    [[1,1,1,1,1,1,1],
     [1,0,0,0,0,0,1],
     [1,0,1,1,1,0,1],
     [1,0,1,0,1,0,1],
     [1,0,1,1,1,0,1],
     [1,0,0,0,0,0,1],
     [1,1,1,1,1,1,1]]

Output: 2
 
-----------------------------------------------------------

Constraints:

1 <= grid.length, grid[0].length <= 100
0 <= grid[i][j] <=1
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const closedIsland = (grid) => {

    // helper function recursivley marks land as water and returns true
    // if island is surrounded by water
    const markIsland = (R, C, up = true, right = true, down = true, left = true) => {
        if (grid[R][C] === 0) {
            grid[R][C] = 1;
            
            // update cardinal direction to false if square in that 
            // direction is 'undefined'
            if (grid[R - 1] === undefined) {
                up = false;
            } else {
                // recursively check and mark island until water or edge of grid
                // is found
                up = markIsland(R - 1, C);
            }
            
            if (grid[R][C + 1] === undefined) {
                right = false;
            } else {
                right = markIsland(R, C + 1);
            }
            
            if (grid[R + 1] === undefined) {
                down = false;
            } else {
                down = markIsland(R + 1, C);
            }
            
            if (grid[R][C - 1] === undefined) {
                left = false;
            } else {
                left = markIsland(R, C - 1);
            }
        }   
        
        return up && right && down && left;
    }
    
    let closedIslands = 0;
    
    for (let row = 0; row < grid.length; row += 1) {
        for (let col = 0; col < grid[row].length; col += 1) {
            if (grid[row][col] === 0) {
                if (markIsland(row, col)) {
                    closedIslands += 1;
                }
            }
        }
    }
    
    return closedIslands;
};