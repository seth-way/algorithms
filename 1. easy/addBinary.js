/*
https://leetcode.com/problems/add-binary/

Given two binary strings a and b, return their sum as a binary string.

--------------------------------------------------------------------------

Example 1:
-
Input: a = "11", b = "1"
Output: "100"
-
Example 2:
-
Input: a = "1010", b = "1011"
Output: "10101"

--------------------------------------------------------------------------

Constraints:
-
1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 const addBinary = (a, b) => {
    const arrA = a.split('').map(char => Number(char));
    const arrB = b.split('').map(char => Number(char));
    
    let result = '';
    let remainder = false;
    let sum;
    
    while (arrA.length || arrB.length) {
        sum =   (remainder ? 1 : 0) +
                (arrA.length ? arrA.pop() : 0) +
                (arrB.length ? arrB.pop() : 0);
        
        remainder = false;
        
        if (sum > 1) {
            sum -= 2;
            remainder = true;
        }
        
        result = sum + result;
    }
    
    if (remainder) result = '1' + result;
    
    return result;
};
