/*
https://leetcode.com/problems/diagonal-traverse/

Given a matrix of M x N elements (M rows, N columns),
return all elements of the matrix in diagonal order as shown in the example below.

-----------------------------------------------------------------------------------

Example:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

Output:  [1,2,4,7,5,3,6,8,9]

Explanation:

Traversals & Results:
1. Up & Right -> { 1 } ... (pushed to output array)
2. Down & Left -> { 2, 4 } 
3. Up & Right -> { 7, 5, 3 }
4. Down & Left -> { 6, 8 }
5. Up & Right -> { 9 }

-----------------------------------------------------------------------------------

Note:

The total number of elements of the given matrix will not exceed 10,000.
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const findDiagonalOrder = (matrix) => {
    if (matrix.length === 0) return [];
    
    const result = [matrix[0][0]];
    let row = 0; let col = 0;
    
    const traverse = (rChange, cChange) => {
        result.push(matrix[row][col]);
        
        // if next diagonal index exists in matrix
        while (matrix[row + rChange] && matrix[row + rChange][col + cChange] !== undefined) {
            // update row & column & push value to result array
            row += rChange;
            col += cChange;
            result.push(matrix[row][col]);
        }
    }
    
    // while not at last index in matrix
    while (!(row === matrix.length - 1 && col === matrix[0].length - 1)) {
        // increase col to end of first row
        // then increase row until end of matrix
        // (right first, then down)
        if (row === 0 && col < matrix[0].length - 1) {
            col += 1;
        } else {
            row += 1;
        }
        // traverse diagonally down & left
        traverse(1, -1);
        
        // increase row to end of matrix
        // then increase col until end of row
        // (down first, then right)
        if (col !== matrix[0].length - 1) {
            if (row !== matrix.length - 1) {
                row += 1;
            } else {
                col += 1;
            }
            // traverse diagonally up & right
            traverse(-1, 1);
        }
    }
    
    return result;
};