/*
https://leetcode.com/problems/hamming-distance/

The Hamming distance between two integers is the number of positions
at which the corresponding bits are different.
-
Given two integers x and y, return the Hamming distance between them.

----------------------------------------------------------------------------------------

Example 1:
-
Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
-
Example 2:
-
Input: x = 3, y = 1
Output: 1

----------------------------------------------------------------------------------------

Constraints:
-
0 <= x, y <= 231 - 1
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 const hammingDistance = (x, y) => {
    let dist = 0;
    let xStr = x.toString(2);
    let yStr = y.toString(2);
    
    while (xStr.length > yStr.length) {
        yStr = '0' + yStr;
    }
    
    while (yStr.length > xStr.length) {
        xStr = '0' + xStr;
    }
    
    for (let i = 0; i < xStr.length; i += 1) {
        if (xStr[i] !== yStr[i]) dist += 1;
    }
    
    return dist;
};
