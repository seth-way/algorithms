/*
https://leetcode.com/problems/surface-area-of-3d-shapes/

On a N * N grid, we place some 1 * 1 * 1 cubes.

Each value v = grid[i][j] represents a tower of v cubes placed on top of grid cell (i, j).

Return the total surface area of the resulting shapes.

-----------------------------------------------------

Example 1:

Input: [[2]]
Output: 10

Example 2:

Input: [[1,2],[3,4]]
Output: 34

Example 3:

Input: [[1,0],[0,2]]
Output: 16

Example 4:

Input: [[1,1,1],[1,0,1],[1,1,1]]
Output: 32

Example 5:

Input: [[2,2,2],[2,1,2],[2,2,2]]
Output: 46
 
-----------------------------------------------------

Note:

1 <= N <= 50
0 <= grid[i][j] <= 50
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
const surfaceArea = (grid) => {
    // calculate total surface area of 3D shape from top only
    // and multiply * 2 to account for bottom
    const topAndBottom = grid.reduce((acc1, row) => (
        acc1 + row.reduce((acc2, val) => (
            acc2 + (val > 0 ? 1 : 0)
        ), 0)
    ), 0) * 2;
    
    // calculate surface area of first row of 3D shape from the front
    let frontToBack = grid[0].reduce((acc, val) => (acc + val), 0);
    
    // iterate from the front to the back of the shape
    for (let i = 0; i < grid.length; i += 1) {
        grid[i].forEach((val, idx) => {
            // add to 'frontToback' the differences between
            // the current row and next row in the shape
            frontToBack += Math.abs(val - (grid[i + 1] ? grid[i + 1][idx] : 0));
        });
    }
        
    // calculate surface area of far left side of 3D shape from the left
    let leftToRight = grid.reduce((acc, row) => (acc + row[0]), 0);
    
    // for each row and each value....
    grid.forEach((row) => {
        row.forEach((val, idx) => {
            // add to 'letToRight' the difference between the
            // current val and the next one
            leftToRight += Math.abs(val - (row[idx + 1] ? row[idx + 1] : 0));
        })
    })
    
    //return sum of all surface areas
    return topAndBottom + frontToBack + leftToRight;
};