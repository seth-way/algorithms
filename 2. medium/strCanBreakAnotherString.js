/*
https://leetcode.com/problems/check-if-a-string-can-break-another-string/

Given two strings: s1 and s2 with the same size,
check if some permutation of string s1 can break
some permutation of string s2 or vice-versa.
In other words s2 can break s1 or vice-versa.
-
A string x can break string y (both of size n)
if x[i] >= y[i] (in alphabetical order) for all i between 0 and n-1.

-----------------------------------------------------------------------------------

Example 1:
-
Input: s1 = "abc", s2 = "xya"
Output: true
Explanation:
"ayx" is a permutation of s2="xya"
which can break to string "abc"
which is a permutation of s1="abc".
-
Example 2:
-
Input: s1 = "abe", s2 = "acd"
Output: false 
Explanation:
All permutations for s1="abe" are: "abe", "aeb", "bae", "bea", "eab" and "eba"
and all permutation for s2="acd" are: "acd", "adc", "cad", "cda", "dac" and "dca".
However, there is not any permutation from s1 which can
break some permutation from s2and vice-versa.
-
Example 3:
-
Input: s1 = "leetcodee", s2 = "interview"
Output: true

-----------------------------------------------------------------------------------

Constraints:

s1.length == n
s2.length == n
1 <= n <= 10^5
All strings consist of lowercase English letters.
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 const checkIfCanBreak = (s1, s2) => {
    let s1BreaksS2 = true;
    let s2BreaksS1 = true;
    
    const sortString = (str) => (
        str.split('').sort().join('')
    );
    
    const s1Sorted = sortString(s1);
    const s2Sorted = sortString(s2);
    
    for (let i = 0; i < s1.length; i += 1) {
        if (s2Sorted[i] > s1Sorted[i]) {
            s1BreaksS2 = false;
        }
        
        if (s1Sorted[i] > s2Sorted[i]) {
            s2BreaksS1 = false;
        }
        
        if (!s1BreaksS2 && !s2BreaksS1) break;
    }
    
    return s1BreaksS2 || s2BreaksS1;
};
