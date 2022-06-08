/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/

Given a string s,
find the length of the longest substring without repeating characters.

---------------------------------------------------------------------------------

Example 1:
-
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc",
with the length of 3.
-
Example 2:
-
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
-
Example 3:
-
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring,
"pwke" is a subsequence and not a substring.

---------------------------------------------------------------------------------

Constraints:
-
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/**
 * @param {string} s
 * @return {number}
 */
 const lengthOfLongestSubstring = (s) => {
    if (s.length < 2) return s.length;
    
    const charsInSubString = new Set();
    // use 2 pointers and a Set to track subString
    let max = start = end = 0;

    while (end < s.length) {
        if (charsInSubString.has(s[end])) {
            charsInSubString.delete(s[start]);
            start += 1;
        } else {
            charsInSubString.add(s[end]);
            max = Math.max(max, end - start + 1);
            end += 1;
        }
    }
    
    return max;
};
