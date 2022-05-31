/*
https://leetcode.com/problems/projection-area-of-3d-shapes/

You are given an n x n grid where we place some 1 x 1 x 1 cubes
that are axis-aligned with the x, y, and z axes.
-
Each value v = grid[i][j] represents a tower of v cubes placed
on top of the cell (i, j).
-
We view the projection of these cubes onto the xy, yz, and zx planes.
-
A projection is like a shadow, that maps our 3-dimensional figure
to a 2-dimensional plane.
We are viewing the "shadow" when looking at the cubes from the top,
the front, and the side.
-
Return the total area of all three projections.

--------------------------------------------------------------------

Example 1:
-
Input: grid = [[1,2],[3,4]]
Output: 17
Explanation: Here are the three projections ("shadows") of the shape made with each axis-aligned plane.
-
Example 2:
-
Input: grid = [[2]]
Output: 5
-
Example 3:
-
Input: grid = [[1,0],[0,2]]
Output: 8

--------------------------------------------------------------------

Constraints:

n == grid.length == grid[i].length
1 <= n <= 50
0 <= grid[i][j] <= 50
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 const projectionArea = (grid) => {
    const areaFromX = (matrix) => (
        matrix.reduce((acc, row) => (acc + Math.max(...row)), 0)
    );
    
    const areaFromY = (matrix) => {
        let area = 0, columnMax;
        
        for (let i = 0; i < matrix[0].length; i += 1) {
            columnMax = 0;
            
            for (let j = 0; j < matrix.length; j += 1) {
                columnMax = matrix[j][i] > columnMax ?
                    matrix[j][i] :
                    columnMax;
            }
            
            area += columnMax;
        }
        
        return area;
    };
    
    const areaFromZ = (matrix) => (
        matrix.reduce((acc, row) => (
            acc + row.reduce((acc2, val) => (
                acc2 + (val > 0 ? 1 : 0)
            ), 0)
        ), 0)
    );
    
    return areaFromX(grid) + areaFromY(grid) + areaFromZ(grid);
};
