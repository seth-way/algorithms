/*
https://leetcode.com/problems/pascals-triangle/submissions/

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

____1____
___1_1___
__1_2_1__
_1_3_3_1_
1_4_6_4_1
 
--------------------------------------------------------------------------------------------

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]

--------------------------------------------------------------------------------------------

Constraints:

1 <= numRows <= 30
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 const generate = (numRows) => {
    if (numRows === 1) return [[1]];
    let result = [[1], [1, 1]];
    let tempArr, prevInt, currInt;
    
    for (let i = 2; i < numRows; i += 1) {
        for (let j = 0; j <= result[i - 1].length; j += 1) {      
            if (j === 0) {
                tempArr = [1];
            } else {
                prevInt = result[i - 1][j - 1];
                currInt = result[i - 1][j] ? result[i - 1][j] : 0;
                tempArr.push(prevInt + currInt);
            }
        }
        result.push(tempArr);
    }
    
    return result;
};