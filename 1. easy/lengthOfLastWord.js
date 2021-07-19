/*
https://leetcode.com/problems/length-of-last-word/

Given a string s consists of some words separated by spaces,
return the length of the last word in the string.
If the last word does not exist, return 0.

A word is a maximal substring consisting of non-space characters only.

-------------------------------------------------------------------------------

Example 1:
-
Input: s = "Hello World"
Output: 5
-
Example 2:
-
Input: s = " "
Output: 0

-------------------------------------------------------------------------------

Constraints:

    1 <= s.length <= 104
    s consists of only English letters and spaces ' '.
*/

/**
 * @param {string} s
 * @return {number}
 */
 const lengthOfLastWord = (s) => {
    return s.split(' ').pop().length;
};