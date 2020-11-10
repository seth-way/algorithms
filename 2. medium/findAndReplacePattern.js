/*
https://leetcode.com/problems/find-and-replace-pattern/

You have a list of words and a pattern,
and you want to know which words in words matches the pattern.

A word matches the pattern if there exists a permutation of letters p
so that after replacing every letter x in the pattern with p(x),
we get the desired word.

(Recall that a permutation of letters is a bijection from letters to letters:
every letter maps to another letter, and no two letters map to the same letter.)

Return a list of the words in words that match the given pattern. 

You may return the answer in any order.

-------------------------------------------------------------------------------------

Example 1:

Input:
words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"

Output:
["mee","aqq"]

Explanation:
"mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}. 
"ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation,
since a and b map to the same letter.
 
-------------------------------------------------------------------------------------

Note:

1 <= words.length <= 50
1 <= pattern.length = words[i].length <= 20
*/
/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
const findAndReplacePattern = (words, pattern) => {
    // helper function maps word to new pattern based
    // on its order of unique characters
    // eg. 'abcc' -> '1233', 'aabca' -> '11231' 
    const mapWordToPattern = (word) => {
        const charMap = {};
        let uniqueChars = 0;
        let pattern = '';
        
        [...word].forEach(char => {
            if (!charMap[char]) charMap[char] = ++uniqueChars;
            pattern += charMap[char];
        });
        
        return pattern;
    };
    
    const key = mapWordToPattern(pattern);
    let matches = [];
    
    words.forEach(word => {
        if (mapWordToPattern(word) === key) matches.push(word);
    });
    
    return matches;
};
