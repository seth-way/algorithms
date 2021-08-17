/*
https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.
-
An input string is valid if:
-
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

------------------------------------------------------------------------------------

Example 1:
-
Input: s = "()"
Output: true
-
Example 2:
-
Input: s = "()[]{}"
Output: true
-
Example 3:
-
Input: s = "(]"
Output: false
-
Example 4:
-
Input: s = "([)]"
Output: false
-
Example 5:
-
Input: s = "{[]}"
Output: true

------------------------------------------------------------------------------------

Constraints:
-
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
 const isValid = (s) => {
    // stack to be filled with closing counterpart
    // to each opening bracket
    const stack = [];
    
    for (let i = 0; i < s.length; i += 1) {
        // fill stack when an opening bracket is found
        if (s[i] === '(') {
            stack.push(')');
        } else if (s[i] === '{') {
            stack.push('}');
        } else if (s[i] === '[') {
            stack.push(']');
        } else {
            // closing brackets should appear in
            // the inverse order to the stack
            if(s[i] !== stack.pop()) {
                return false;
            }
        }
    }
    
    // stack should be empty if string is valid
    return stack.length === 0;
};
