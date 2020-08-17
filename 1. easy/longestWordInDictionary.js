/*
https://leetcode.com/problems/longest-word-in-dictionary/

Given a list of strings words representing an English Dictionary, find the longest word in words that can be built one character at a time by other words in words.
If there is more than one possible answer, return the longest word with the smallest lexicographical order.

If there is no answer, return the empty string.

---------------------------------

Example 1:
Input: 
words = ["w","wo","wor","worl", "world"]
Output: "world"
Explanation: 
The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".

Example 2:
Input: 
words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
Output: "apple"
Explanation: 
Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".
*/

/**
 * @param {string[]} words
 * @return {string}
 */

const longestWord = (words) => {
    const stringsByLength = {};
    
    words.forEach(word => {
        if (stringsByLength[word.length]) {
            stringsByLength[word.length].push(word);
        } else {
            stringsByLength[word.length] = [word];
        }
    })
    
    let validStrings = [''];
    const lengthOfLongestString = Math.max(...Object.keys(stringsByLength));
    
    for (let i = 1; i <= lengthOfLongestString; i += 1) {
        let newValidStrings = [];
        
        if(stringsByLength[i]){
            for (let j = 0; j < stringsByLength[i].length; j += 1) {
                let testString = stringsByLength[i][j];
                
                validStrings.forEach(string => {
                    if (testString.slice(0, i - 1) === string) {
                        newValidStrings.push(testString);
                    }
                });
            }
        }
        
        if (newValidStrings.length > 0) {
            validStrings = newValidStrings;
        } else {
            break;
        }
    }

    validStrings.sort();
    
    return validStrings[0];
};
