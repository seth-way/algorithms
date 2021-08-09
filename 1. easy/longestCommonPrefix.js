/*
https://leetcode.com/problems/longest-common-prefix/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

-------------------------------------------------------------------------------------------

Example 1:
-
Input: strs = ["flower","flow","flight"]
Output: "fl"
-
Example 2:
-
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 
-------------------------------------------------------------------------------------------

Constraints:
-
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
 const longestCommonPrefix = (strs) => {
    let result = '', match = true, char;
    // find length of shortest word in array 
    const minLength = Math.min(...strs.map(({ length }) => length));
    
    for (let i = 0; i < minLength; i += 1) {
        char = strs[0][i];
        // test each word for character match
        // at current index
        strs.forEach(word => {
            if (word[i] !== char) {
                match = false;
            }
        });
        
        if (match) {
            result += char;
        } else {
            break;
        }
    }
    
    return result;
};
