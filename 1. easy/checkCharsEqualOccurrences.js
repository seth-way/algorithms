/*
https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/

Given a string s, return true if s is a good string, or false otherwise.
-
A string s is good if all the characters that appear in s
have the same number of occurrences (i.e., the same frequency).

----------------------------------------------------------------------------------

Example 1:
-
Input: s = "abacbc"
Output: true
Explanation: The characters that appear in s are 'a', 'b', and 'c'.
All characters occur 2 times in s.
-
Example 2:
-
Input: s = "aaabb"
Output: false
Explanation: The characters that appear in s are 'a' and 'b'.
'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.

----------------------------------------------------------------------------------

Constraints:
-
1 <= s.length <= 1000
s consists of lowercase English letters.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
 const areOccurrencesEqual = (s) => {
    let result = true;
    let keyA, keyB;
    const charCount = {};
    
    // use charCount to store number
    // of occurrences of each character
    s.split('').forEach(char => {
        if (charCount[char]) {
            charCount[char] += 1;
        } else {
            charCount[char] = 1;
        }
    });
    
    const numChars = Object.keys(charCount).length;
    keyA = Object.keys(charCount)[0];
    
    // compare occurrrences of each char
    for (let i = 1; i < numChars; i += 1) {
        keyB = Object.keys(charCount)[i];
        
        if (charCount[keyA] !== charCount[keyB]) {
            result = false;
            break;
        }
    }

    return result;
};
