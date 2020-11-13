/*
https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/

Given a string s, a k duplicate removal consists of choosing k adjacent
and equal letters from s and removing them causing the left and the right side
of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made.

It is guaranteed that the answer is unique.

-------------------------------------------------------------------------

Example 1:

Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.

Example 2:

Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation: 
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"

Example 3:

Input: s = "pbbcggttciiippooaais", k = 2
Output: "ps"
 
-------------------------------------------------------------------------

Constraints:

1 <= s.length <= 10^5
2 <= k <= 10^4
s only contains lower case English letters.
*/
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const removeDuplicates = (s, k) => {
    let result = s;
    let slicePoints = []; // holds indices of locations to remove from string
    let consecutive = 1; // tracks consecutive chars
    let lastChar = s[0]; 

    for (let i = 1; i < s.length; i += 1) {
        if (s[i] === lastChar) {
            consecutive += 1;
            if (consecutive === k) {
                // push start of string to remove, end of string to remove
                slicePoints.push([i - k + 1, i + 1]);
                // reset consecutive and lastChar
                consecutive = 0;
                lastChar = s[i + 1];
            }
        } else {
            consecutive = 1;
            lastChar = s[i];
        }
    }
    
    let nextToDelete;
    // remove subStrings using slicePoints array
    while (slicePoints.length) {
        nextToDelete = slicePoints.pop();
        result = result.slice(0, nextToDelete[0]) + result.slice(nextToDelete[1]);
    }
    
    // recursively execute method until result is no longer updated
    return s.length === result.length ? s : removeDuplicates(result, k);
};
