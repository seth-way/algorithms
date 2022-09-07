/*
https://leetcode.com/problems/power-of-four/

Given an integer n,
return true if it is a power of four.
Otherwise, return false.
-
An integer n is a power of four,
if there exists an integer x such that n == 4x.

------------------------------------------------------------

Example 1:
-
Input: n = 16
Output: true
-
Example 2:
-
Input: n = 5
Output: false
-
Example 3:
-
Input: n = 1
Output: true

------------------------------------------------------------

Constraints:
-
-231 <= n <= 231 - 1

*/

/**
 * @param {number} n
 * @return {boolean}
 */
 const isPowerOfFour = (n) => {
    if (n < 1) return false;

    for (let i = 0; Math.pow(4, i) <= n; i += 1) {
        if (Math.pow(4, i) === n) return true;
    }

    return false;
};
