/*
https://leetcode.com/problems/count-common-words-with-one-occurrence/submissions/

Given two string arrays words1 and words2,
return the number of strings that appear exactly once in each of the two arrays.

----------------------------------------------------------------------------------------------

Example 1:
-
Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
Output: 2
Explanation:
- "leetcode" appears exactly once in each of the two arrays. We count this string.
- "amazing" appears exactly once in each of the two arrays. We count this string.
- "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
- "as" appears once in words1, but does not appear in words2. We do not count this string.
Thus, there are 2 strings that appear exactly once in each of the two arrays.
-
Example 2:
-
Input: words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
Output: 0
Explanation: There are no strings that appear in each of the two arrays.
-
Example 3:
-
Input: words1 = ["a","ab"], words2 = ["a","a","a","ab"]
Output: 1
Explanation: The only string that appears exactly once in each of the two arrays is "ab".

----------------------------------------------------------------------------------------------

Constraints:

1 <= words1.length, words2.length <= 1000
1 <= words1[i].length, words2[j].length <= 30
words1[i] and words2[j] consists only of lowercase English letters.
*/

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
 const countWords = (words1, words2) => {
    let result = 0, i = 0, j = 0;
    
    words1.sort();
    words2.sort();
    
    // use i & j as pointers to compare strings
    // in words1 and words2 arrays
    while (i < words1.length && j < words2.length) {
        
        // skip duplicates in words1 (if they exist)
        if (words1[i] === words1[i + 1]) {
            i = words1.lastIndexOf(words1[i]) + 1;
            continue;
        }
        // skip duplicates in words2 (if they exist)
        if (words2[j] === words2[j + 1]) {
            j = words2.lastIndexOf(words2[j]) + 1;
            continue;
        }
        
        if (words1[i] === words2[j]) {
            result += 1;
            i += 1;
            j += 1;
        } else if (words1[i] < words2[j]) {
            i += 1;
        } else {
            j += 1;
        }
    }
    
    return result;
};
