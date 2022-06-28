/*
https://leetcode.com/problems/count-substrings-that-differ-by-one-character/

Given two strings s and t,
find the number of ways you can choose a non-empty substring of s
and replace a single character by a different character
such that the resulting substring is a substring of t.
In other words, find the number of substrings in s that differ
from some substring in t by exactly one character.
-
Return the number of substrings that satisfy the condition above.
-
A substring is a contiguous sequence of characters within a string.

---------------------------------------------------------------------------

Example 1:
-
Input: s = "aba", t = "baba"
Output: 6
Explanation:
The following are the pairs of substrings from s and t
that differ by exactly 1 character:
("a", "b")
("a", "b")
("a", "b")
("a", "b")
("b", "a")
("b", "a")
-
​​Example 2:
-
Input: s = "ab", t = "bb"
Output: 3
Explanation:
The following are the pairs of substrings from s and t
that differ by 1 character:
("a", "b")
("a", "b")
("ab", "bb")

---------------------------------------------------------------------------

Constraints:
-
1 <= s.length, t.length <= 100
s and t consist of lowercase English letters only.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
 const countSubstrings = (s, t) => {
    let count = 0;
    let testStr;
    
    const differByOne = (a, b) => {
        let diffOfOne = false;
        
        for (let i = 0; i < a.length; i += 1) {
            if (a[i] !== b[i]) {
                if (!diffOfOne) {
                    diffOfOne = true;
                } else {
                    return false;
                }
            }
        }
        
        return diffOfOne;
    };
    
    for (let i = 0; i < s.length; i += 1) {
        for (let j = i + 1; j <= s.length; j += 1) {
            testStr = s.slice(i, j);
            for (let k = 0; k + testStr.length <= t.length; k += 1) {
                if (differByOne(testStr, t.slice(k, k + testStr.length))) {
                    count += 1;
                }
            }
        }
    }
    
    return count;
};
