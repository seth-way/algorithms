/*
https://leetcode.com/problems/sum-of-square-numbers/

Given a non-negative integer c,
decide whether there're two integers a and b
such that a2 + b2 = c.

-----------------------------------------------------------------

Example 1:
-
Input: c = 5
Output: true
Explanation: 1 * 1 + 2 * 2 = 5
-
Example 2:
-
Input: c = 3
Output: false

-----------------------------------------------------------------

Constraints:
-
0 <= c <= 231 - 1
*/

/**
 * @param {number} c
 * @return {boolean}
 */
 const judgeSquareSum = (c) => {
    let result = false;
    let a = 0; let b = 1;
    
    while (a < b) {
        b = Math.sqrt(c - a * a);
        
        if (b === Math.floor(b)) {
            result = true;
            break;
        }
        
        a += 1;
    }
    
    return result;
};
