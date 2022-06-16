/*
https://leetcode.com/problems/longest-palindromic-substring/

Given a string s, return the longest palindromic substring in s.

------------------------------------------------------------------

Example 1:
-
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
-
Example 2:
-
Input: s = "cbbd"
Output: "bb"

------------------------------------------------------------------

Constraints:
-
1 <= s.length <= 1000
s consist of only digits and English letters.
*/

/**
 * @param {string} s
 * @return {string}
 */
 const longestPalindrome = (s) => {
    let longest = s[0];
    let test;
    
    const getCurrentPalindrome = (start, end) => {
        if (s[start - 1] && s[start - 1] === s[end + 1]) {
            return getCurrentPalindrome(start - 1, end + 1);
        }
        
        return s.slice(start, end + 1);
    }

    for (let i = 1; i < s.length; i += 1) {
        // break loop when longer palindrome is no longer possible
        if (longest.length > (s.length - i) * 2) break;
        
        // find longest odd length palindrome centered around current idx
        test = getCurrentPalindrome(i, i);
        
        if (test.length > longest.length) longest = test;
        
        
        if (s[i] === s[i - 1]) {
            // find longest even length palindrome centered around 
            // current and previous indices
            test = getCurrentPalindrome(i - 1, i);
            
            if (test.length > longest.length) longest = test;
        }
    }
    
    return longest;
};
