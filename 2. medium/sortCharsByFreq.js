/*
https://leetcode.com/problems/sort-characters-by-frequency/

Given a string s, sort it in decreasing order based on the frequency of the characters.
The frequency of a character is the number of times it appears in the string.
-
Return the sorted string. If there are multiple answers, return any of them.

-------------------------------------------------------------------------------------------------

Example 1:
-
Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
-
Example 2:
-
Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.
-
Example 3:
-
Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.

-------------------------------------------------------------------------------------------------

Constraints:

1 <= s.length <= 5 * 105
s consists of uppercase and lowercase English letters and digits.
*/

/**
 * @param {string} s
 * @return {string}
 */
 const frequencySort = (s) => {
    const charCountObj = {}, countToIdx = [];
    
    // create object where key is char and value is char count
    [...s].forEach(char => {
        if (charCountObj[char]) {
            charCountObj[char] = charCountObj[char] + 1;
        } else {
            charCountObj[char] = 1;
        }
    });
    
    // create array where idx is char count and
    // value is string of all chars at that count
    Object.keys(charCountObj).forEach(char => {
        if (countToIdx[charCountObj[char]]) {
            countToIdx[charCountObj[char]] = countToIdx[charCountObj[char]] + char;
        } else {
            countToIdx[charCountObj[char]] = char;
        }
    });
    
    // helper function takes string and char count and
    // returns appropriate string result
    // ex. (2, 'fox') => 'ffooxx'
    const loadCurrIdx = (idx, str) => {
        let result = '';
        
        for (let i = 0; i < str.length; i += 1) {
            for (let j = 0; j < idx; j += 1) {
                result += str[i];
            }
        }
        
        return result;
    };
    
    return countToIdx.reduceRight((a, b, idx) => (a + loadCurrIdx(idx, b)), '');
};
