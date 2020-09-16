/*
https://leetcode.com/problems/partition-labels/

A string S of lowercase English letters is given.
We want to partition this string into as many parts as possible
so that each letter appears in at most one part,
and return a list of integers representing the size of these parts.

--------------------------------------------------------

Example 1:

Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
 
--------------------------------------------------------

Note:

S will have length in range [1, 500].
S will consist of lowercase English letters ('a' to 'z') only.
*/

/**
 * @param {string} S
 * @return {number[]}
 */
const partitionLabels = (S) => {
    // stores the last index of each char
    const lastIndexOfChar = {};

    // maps S ... (val) => lastIndexOf(val)
    // while keeping O(n) time complexity
    const lastIndexArray = new Array(S.length);
    
    for (let i = S.length - 1; i >= 0; i -= 1) {
        if (lastIndexOfChar[S[i]] === undefined) {
            lastIndexOfChar[S[i]] = i;
        }
        
        lastIndexArray[i] = lastIndexOfChar[S[i]];
    }
    
    const result = [];
    let startIndex = 0; let maxIndex = 0;
    
    for (let i = 0; i < S.length; i += 1) {
        // update last index in current string partition
        maxIndex = Math.max(maxIndex, lastIndexArray[i]);
        

        if (maxIndex === i) {
            result.push(i - startIndex + 1); // push length of partition
            startIndex = i + 1; // update start of next partition
        }
    }
    
    return result;
};