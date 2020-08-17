/*
https://leetcode.com/problems/is-subsequence/

Given a string s and a string t, check if s is subsequence of t.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

Follow up:
If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence.
In this scenario, how would you change your code?

----------------------------------------

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isSubsequence = (s, t) => {

    if (s.length === t.length) {
        return s === t;
    }
    
    let previousIndex = -1;
    
    for (let i = 0; i < s.length; i += 1) {
        let temp = t.indexOf(s[i], previousIndex + 1);
        
        if (temp === -1) {
            return false           
        } else {
            previousIndex = temp;
        }
    }
    
    return true;
};