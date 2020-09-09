/*
https://leetcode.com/problems/remove-outermost-parentheses/

A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation. 
For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

-------------------------------------------------------------

Example 1:

Input: "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

Example 2:

Input: "(()())(())(()(()))"
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
*/

/**
 * @param {string} S
 * @return {string}
 */

const removeOuterParentheses = (S) => {
    let charArray = S.split('');
    let counter = 0;
    
    for (let i = 0; i < charArray.length; i += 1) {
        if (charArray[i] === '(') {
            counter += 1;
            if (counter === 1) { 
                charArray[i] = '';
            }
        } else {
            counter -= 1;
            if (counter === 0) {
                charArray[i] = '';
            }
        }
    }
    
    return charArray.join('');
};