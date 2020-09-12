/*
https://leetcode.com/problems/sort-the-matrix-diagonally/

Given a m * n matrix mat of integers,
sort it diagonally in ascending order
from the top-left to the bottom-right, 
then return the sorted array.

-------------------------------------------------------

Example 1:


Input: 

mat  =  [[3,3,1,1]
        ,[2,2,1,2]
        ,[1,1,1,2]]

Output: [[1,1,1,1]
        ,[1,2,2,2]
        ,[1,2,3,3]]
*/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const diagonalSort = (mat) => {
    // helper funtion sorts starting w/ a row & col
    const sort = (row, col) => {
        // recursively get all values diagonally
        const getValues = (R, C, arr = []) => {
            if (mat[R] && mat[R][C]) {
                arr.push(mat[R][C]);
                return getValues(R + 1, C + 1, arr);
            } else {
                // return array of values
                return arr;
            }
        };
        
        // get values array and sort ascending
        const orderedValues = getValues(row, col).sort((a, b) => (a - b));
        
        // place each sorted value in the matrix
        // at its respective row & col
        orderedValues.forEach((val, idx) => {
            mat[row + idx][col + idx] = val;
        });
    };
    
    // sort each row at index 0
    mat.forEach((row, idx) => {
        sort(idx, 0);
    });
    
    // sort remaining columns in row 1
    for (let i = 0; i < mat[0].length; i += 1) {
        sort(0, i);
    }
    
    return mat;
};
