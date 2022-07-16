/*
https://leetcode.com/problems/generate-parentheses/

Given n pairs of parentheses,
write a function to generate all combinations of well-formed parentheses.

--------------------------------------------------------------

Example 1:
-
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
-
Example 2:
-
Input: n = 1
Output: ["()"]

--------------------------------------------------------------

Constraints:
-
1 <= n <= 8
*/

/**
 * @param {number} n
 * @return {string[]}
 */
 const generateParenthesis = (n) => {
    const result = [];
    
    const generateVariations = (parenthesis, balance) => {
        if (parenthesis.length === n * 2) {
            result.push(parenthesis);
        } else {
            if (balance > 0) {
                generateVariations(parenthesis + ')', balance - 1);
            }
            
            if (balance < n * 2 - parenthesis.length) {
                generateVariations(parenthesis + '(', balance + 1);
            }
        }
    }
    
    generateVariations('', 0);
    
    return result;
};
