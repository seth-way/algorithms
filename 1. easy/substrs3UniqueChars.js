/*
https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/

A string is good if there are no repeated characters.
-
Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
-
Note that if there are multiple occurrences of the same substring,
every occurrence should be counted.
-
A substring is a contiguous sequence of characters in a string.

-------------------------------------------------------------------------

Example 1:
-
Input: s = "xyzzaz"
Output: 1
Explanation:
There are 4 substrings of size 3:
"xyz", "yzz", "zza", and "zaz". 
The only good substring of length 3 is "xyz".
-
Example 2:
-
Input: s = "aababcabc"
Output: 4
Explanation:
There are 7 substrings of size 3:
"aab", "aba", "bab", "abc", "bca", "cab", and "abc".
The good substrings are "abc", "bca", "cab", and "abc".

-------------------------------------------------------------------------

Constraints:
-
1 <= s.length <= 100
s​​​​​​ consists of lowercase English letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
 const countGoodSubstrings = (s) => {
    if (s.length < 3) return 0;
    
    let count = 0;
    let charCount = {};
    
    // count occurences of 1st 3 chars of s
    s.slice(0,3).split('').forEach(char => {
        if (!charCount[char]) charCount[char] = 0;
        charCount[char] += 1;
    });
    
    // if 3 are distinct, update count
    if (Object.keys(charCount).length === 3) count = 1;
    
    // helper function updates charCount object
    // for current substring idx
    const updateCharCount = (idx) => {
        charCount[s[idx - 3]] -= 1;
        if (!charCount[s[idx - 3]]) delete charCount[s[idx - 3]];
        
        if (!charCount[s[idx]]) charCount[s[idx]] = 0;
        charCount[s[idx]] += 1;
    }
    
    for (let i = 3; i < s.length; i += 1) {
        updateCharCount(i);
        
        if (Object.keys(charCount).length === 3) count += 1;
    }
    
    return count;
};
