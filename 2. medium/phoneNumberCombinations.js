/*
https://leetcode.com/problems/letter-combinations-of-a-phone-number/

Given a string containing digits from 2-9 inclusive,
return all possible letter combinations that the number could represent.
Return the answer in any order.
-
A mapping of digit to letters (just like on the telephone buttons) is given below.
Note that 1 does not map to any letters.
-
1:
2: abc
3: def
4: ghi
5: jkl
6: mno
7: pqrs
8: tuv
9: wxyz
0:

-------------------------------------------------------------------------------------------

Example 1:
-
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
-
Example 2:
-
Input: digits = ""
Output: []
-
Example 3:
-
Input: digits = "2"
Output: ["a","b","c"]

-------------------------------------------------------------------------------------------

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
    if (!digits.length) return [];
    
    const result = [];
    
    const keyPad = {
        2: 'abc', 
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    
    // recursive function to work through string
    // of digits and fill result with all letter
    // combinations
    const findCombinations = (nums, prefix) => {
        let chars = keyPad[nums[0]];
        
        for (let i = 0; i < chars.length; i += 1) {
            prefix += chars[i];
            
            if (nums.length < 2) {
                result.push(prefix);
            } else {
                findCombinations(nums.slice(1), prefix);
            }
            
            prefix = prefix.slice(0, -1);
        }
    }
    
    findCombinations(digits, '');
    
    return result;
};
